import React, { useState } from 'react';
import { FileNode } from '../../types/File';

interface FileExplorerProps {
  initialFiles: FileNode[];
}

const FileExplorer: React.FC<FileExplorerProps> = ({ initialFiles }) => {
  const [currentFiles, setCurrentFiles] = useState<FileNode[]>(initialFiles);
  const [path, setPath] = useState<string[]>([]);
  const [selectedFiles, setSelectedFiles] = useState<Set<string>>(new Set());
  const [searchTerm, setSearchTerm] = useState('');
  const [newCollectionName, setNewCollectionName] = useState('');
  const [sortConfig, setSortConfig] = useState<{ key: keyof FileNode | null; direction: 'ascending' | 'descending' }>({ key: null, direction: 'ascending' });

  const navigateToFolder = (folder: FileNode) => {
    if (folder.type === 'folder' && folder.children) {
      setCurrentFiles(folder.children);
      setPath([...path, folder.name]);
      setSelectedFiles(new Set());
    }
  };

  const goBack = () => {
    if (path.length > 0) {
      const newPath = path.slice(0, path.length - 1);
      // Placeholder logic for retrieving files based on path
      setCurrentFiles(initialFiles); // Adjust this logic based on your data structure
      setPath(newPath);
    }
  };

  const toggleSelectFile = (id: string) => {
    const updatedSelection = new Set(selectedFiles);
    if (updatedSelection.has(id)) {
      updatedSelection.delete(id);
    } else {
      updatedSelection.add(id);
    }
    setSelectedFiles(updatedSelection);
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const createNewCollection = () => {
    if (newCollectionName) {
      const newFolder: FileNode = {
        id: `${Date.now()}`,
        title: newCollectionName,
        author: 'User',
        name: newCollectionName,
        type: 'folder',
        size: '',
        publicationDate: '',
        dateUploaded: new Date().toISOString(),
        status: 'active',
        tags: [],
        children: [],
      };
      setCurrentFiles([...currentFiles, newFolder]);
      setNewCollectionName('');
    }
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      Array.from(files).forEach((file) => {
        const newFile: FileNode = {
          id: `${Date.now()}-${file.name}`,
          title: file.name,
          author: 'User',
          name: file.name,
          type: 'file',
          size: `${(file.size / 1024).toFixed(2)} KB`,
          publicationDate: new Date().toISOString(),
          dateUploaded: new Date().toISOString(),
          status: 'uploaded',
          tags: [],
        };
        setCurrentFiles((prev) => [...prev, newFile]);
      });
    }
  };

  const deleteSelectedFiles = () => {
    const updatedFiles = currentFiles.filter(file => !selectedFiles.has(file.id));
    setCurrentFiles(updatedFiles);
    setSelectedFiles(new Set());
  };

  const filteredFiles = currentFiles.filter(file =>
    file.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Updated sorting function with null check for sortConfig.key
  const sortedFiles = React.useMemo(() => {
    let sortableFiles = [...filteredFiles];
    if (sortConfig.key) {
      sortableFiles.sort((a, b) => {
        const aValue = a[sortConfig.key as keyof typeof a] as keyof typeof a;
        const bValue = b[sortConfig.key as keyof typeof b] as keyof typeof b;

        if (aValue < bValue) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (aValue > bValue) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableFiles;
  }, [filteredFiles, sortConfig]);

  // Function to handle sorting
  const requestSort = (key: keyof FileNode) => {
    let direction: 'ascending' | 'descending' = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  return (
    <div style={{ overflowX: 'auto' }} className='flex flex-col gap-2 pt-[50px]'>
      <div className='flex flex-row items-center justify-between gap-4 '>
        <div className='flex items-center gap-4'>
        <button onClick={goBack} disabled={path.length === 0} className=' border border-slate-300 px-[10px] py-[5px] rounded hover:cursor-pointer hover:border-indigo-600'>◀ Go Back</button>
        <button onClick={createNewCollection} className=' border border-slate-300 px-[10px] py-[5px] rounded flex items-center hover:cursor-pointer hover:border-indigo-600'>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="mask0_2312_1880" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
              <rect width="24" height="24" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_2312_1880)">
              <path d="M11.25 12.75H5.5V11.25H11.25V5.5H12.75V11.25H18.5V12.75H12.75V18.5H11.25V12.75Z" fill="#636262" />
            </g>
          </svg>
          Create Collection</button>
        <button onClick={deleteSelectedFiles} disabled={selectedFiles.size === 0} className=' border border-slate-300 px-[10px] py-[5px] rounded flex items-center hover:cursor-pointer hover:border-indigo-600' >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="mask0_2312_1871" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
              <rect width="24" height="24" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_2312_1871)">
              <path d="M11.25 15.7885V7.3885L8.78475 9.85375L7.73075 8.76925L12 4.5L16.2693 8.76925L15.2153 9.85375L12.75 7.3885V15.7885H11.25ZM6.30775 19.5C5.80258 19.5 5.375 19.325 5.025 18.975C4.675 18.625 4.5 18.1974 4.5 17.6923V14.9808H6V17.6923C6 17.7692 6.03208 17.8398 6.09625 17.9038C6.16025 17.9679 6.23075 18 6.30775 18H17.6923C17.7692 18 17.8398 17.9679 17.9038 17.9038C17.9679 17.8398 18 17.7692 18 17.6923V14.9808H19.5V17.6923C19.5 18.1974 19.325 18.625 18.975 18.975C18.625 19.325 18.1974 19.5 17.6923 19.5H6.30775Z" fill="#636262" />
            </g>
          </svg>
          File Upload
        </button>
        <button onClick={deleteSelectedFiles} disabled={selectedFiles.size === 0} className=' border border-slate-300 px-[10px] py-[5px] rounded flex items-center hover:cursor-pointer hover:border-indigo-600'>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="mask0_2312_2164" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
              <rect width="24" height="24" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_2312_2164)">
              <path d="M7.30775 20.5C6.80908 20.5 6.38308 20.3234 6.02975 19.9702C5.67658 19.6169 5.5 19.1909 5.5 18.6922V5.99998H4.5V4.49998H9V3.61548H15V4.49998H19.5V5.99998H18.5V18.6922C18.5 19.1974 18.325 19.625 17.975 19.975C17.625 20.325 17.1974 20.5 16.6923 20.5H7.30775ZM17 5.99998H7V18.6922C7 18.7821 7.02883 18.8558 7.0865 18.9135C7.14417 18.9711 7.21792 19 7.30775 19H16.6923C16.7692 19 16.8398 18.9679 16.9038 18.9037C16.9679 18.8397 17 18.7692 17 18.6922V5.99998ZM9.404 17H10.9037V7.99998H9.404V17ZM13.0962 17H14.596V7.99998H13.0962V17Z" fill="#636262" />
            </g>
          </svg>
          Delete Selected
        </button>
        <button onClick={deleteSelectedFiles} disabled={selectedFiles.size === 0} className=' border border-slate-300 px-[10px] py-[5px] rounded flex items-center hover:cursor-pointer hover:border-indigo-600'>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="mask0_2312_1944" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
              <rect width="24" height="24" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_2312_1944)">
              <path d="M20.9578 14.202L14.202 20.9578C14.0203 21.1384 13.8159 21.274 13.5887 21.3645C13.3616 21.4548 13.1351 21.5 12.9093 21.5C12.6833 21.5 12.4572 21.4548 12.2312 21.3645C12.0052 21.274 11.8019 21.1384 11.6213 20.9578L3.027 12.373C2.8565 12.209 2.726 12.0165 2.6355 11.7955C2.54517 11.5745 2.5 11.342 2.5 11.098V4.31725C2.5 3.81758 2.67658 3.38975 3.02975 3.03375C3.38308 2.67792 3.81225 2.5 4.31725 2.5H11.098C11.3395 2.5 11.5734 2.549 11.7998 2.647C12.0262 2.74483 12.2225 2.87658 12.3885 3.04225L20.9578 11.627C21.1409 11.8087 21.2745 12.013 21.3585 12.24C21.4425 12.4672 21.4845 12.6949 21.4845 12.9233C21.4845 13.1516 21.4425 13.3761 21.3585 13.5968C21.2745 13.8176 21.1409 14.0193 20.9578 14.202ZM13.1328 19.9038L19.8885 13.148C19.9525 13.084 19.9845 13.0087 19.9845 12.922C19.9845 12.8355 19.9525 12.7603 19.8885 12.6962L11.2078 4.0095H4.31725C4.22758 4.0095 4.15225 4.03842 4.09125 4.09625C4.03042 4.15392 4 4.22758 4 4.31725V11.0828C4 11.1213 4.00642 11.1597 4.01925 11.198C4.03208 11.2365 4.0545 11.2718 4.0865 11.3038L12.6808 19.9038C12.7449 19.9679 12.8203 20 12.9068 20C12.9933 20 13.0686 19.9679 13.1328 19.9038ZM6.525 7.77875C6.87367 7.77875 7.16983 7.65725 7.4135 7.41425C7.657 7.17125 7.77875 6.87608 7.77875 6.52875C7.77875 6.17892 7.65725 5.88158 7.41425 5.63675C7.17125 5.39175 6.87608 5.26925 6.52875 5.26925C6.17892 5.26925 5.88158 5.39133 5.63675 5.6355C5.39175 5.87967 5.26925 6.17617 5.26925 6.525C5.26925 6.87367 5.39133 7.16983 5.6355 7.4135C5.87967 7.657 6.17617 7.77875 6.525 7.77875Z" fill="#636262" />
            </g>
          </svg>

          Tag
        </button>
        </div>

        <div className="max-w-md">
          <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
            </div>
            <input type="search" id="default-search" className="block w-full py-[5px] ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus-visible:outline-none" placeholder="Search Tags, Files..." required />
          </div>
        </div>

      </div>
      <div>
        {/* <h2>Current Path: {path.join(' / ')}</h2> */}
      </div>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr className='tb-head'>
            <th className='border-l border-[#636262]  max-w-[30px]'></th>
            <th onClick={() => requestSort('title')} style={{ cursor: 'pointer' }} className='border-l border-[#636262] '>{(sortConfig.key == 'title' && sortConfig.direction == 'descending') ? 'Title↓' : 'Title↑'}</th>
            <th onClick={() => requestSort('author')} style={{ cursor: 'pointer' }}  className='border-l border-[#636262]  '>{(sortConfig.key == 'author' && sortConfig.direction == 'descending') ? 'Author↓' : 'Author↑'}</th>
            <th onClick={() => requestSort('name')} style={{ cursor: 'pointer' }}  className='border-l border-[#636262]  '>{(sortConfig.key == 'name' && sortConfig.direction == 'descending') ? 'Name↓' : 'Name↑'}</th>
            <th onClick={() => requestSort('type')} style={{ cursor: 'pointer' }}  className='border-l border-[#636262]  '>{(sortConfig.key == 'type' && sortConfig.direction == 'descending') ? 'Type↓' : 'Type↑'}</th>
            <th onClick={() => requestSort('size')} style={{ cursor: 'pointer' }}  className='border-l border-[#636262]  '>{(sortConfig.key == 'size' && sortConfig.direction == 'descending') ? 'Size↓' : 'Size↑'}</th>
            <th onClick={() => requestSort('publicationDate')} style={{ cursor: 'pointer' }}  className='border-l border-[#636262]  '>{(sortConfig.key == 'publicationDate' && sortConfig.direction == 'descending') ? 'Publication Date↓' : 'Publication Date↑'}</th>
            <th onClick={() => requestSort('dateUploaded')} style={{ cursor: 'pointer' }}  className='border-l border-[#636262]  '>{(sortConfig.key == 'dateUploaded' && sortConfig.direction == 'descending') ? 'Date Uploaded↓' : 'Date Uploaded↑'}</th>
            <th onClick={() => requestSort('status')} style={{ cursor: 'pointer' }}  className='border-l border-[#636262]  '>{(sortConfig.key == 'status' && sortConfig.direction == 'descending') ? 'Status↓' : 'Status↑'}</th>
            <th onClick={() => requestSort('tags')} style={{ cursor: 'pointer' }}  className='border-l border-[#636262]  '>{(sortConfig.key == 'tags' && sortConfig.direction == 'descending') ? 'Tags↓' : 'Tags↑'}</th>
          </tr>
        </thead>
        <tbody>
          {sortedFiles.map((file) => (
            <tr
              key={file.id}
              onDoubleClick={() => navigateToFolder(file)}
              style={{ cursor: 'pointer' }}
            >
              <td className='max-w-[30px]'>
                <input
                  type="checkbox"
                  checked={selectedFiles.has(file.id)}
                  onChange={() => toggleSelectFile(file.id)}
                />
              </td>
              <td>{file.title}</td>
              <td>{file.author}</td>
              <td>{file.name}</td>
              <td>{file.type}</td>
              <td>{file.size}</td>
              <td>{file.publicationDate}</td>
              <td>{file.dateUploaded}</td>
              <td>{file.status}</td>
              <td>{file.tags.join(', ')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FileExplorer;
