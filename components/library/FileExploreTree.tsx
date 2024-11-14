import React, { useState } from 'react';
import { FileNode } from '../../types/File';

interface FileExplorerTreeProps {
  files: FileNode[];
}

const FileExplorerTree: React.FC<FileExplorerTreeProps> = ({ files }) => {
  const [openFolders, setOpenFolders] = useState<Record<string, boolean>>({});

  // Function to toggle folder visibility
  const toggleFolder = (id: string) => {
    setOpenFolders((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // Function to render files and folders recursively
  const renderFiles = (files: FileNode[]) => {
    return files.map((file) => {
      if (file.type === 'folder') {
        return (
          <div key={file.id}>
            <div
              style={{ cursor: 'pointer', fontWeight: 'bold' }}
              onClick={() => toggleFolder(file.id)}
            >
              📁 {file.name}
            </div>
            {/* Render children if the folder is open */}
            {openFolders[file.id] && (
              <div style={{ paddingLeft: '20px' }}>{renderFiles(file.children || [])}</div>
            )}
          </div>
        );
      } else {
        return (
          <></>
        );
      }
    });
  };

  return <div>{renderFiles(files)}</div>;
};

export default FileExplorerTree;
