export interface FileNode {
    id: string; // Unique identifier for each file/folder
    title: string; // Title of the file
    author: string; // Author of the file
    name: string; // Name of the file/folder
    type: 'file' | 'folder'; // Type of the node
    size: string; // Size of the file (or empty for folders)
    publicationDate: string; // Publication date
    dateUploaded: string; // Date uploaded
    status: string; // Status of the file (e.g., 'published', 'draft', etc.)
    tags: string[]; // Tags associated with the file
    children?: FileNode[]; // Children nodes for folders
  }
  