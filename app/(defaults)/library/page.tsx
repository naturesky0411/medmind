"use client";
import React from 'react';
import FileExplorer from '@/components/library/FileExplore';
import _files from '@/data/files.json';

const Library = () => {
  const files:any = _files;
  return (
    <div>
      <FileExplorer initialFiles={files} />
    </div>
  );
};

export default Library;
