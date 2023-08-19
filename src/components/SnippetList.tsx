import { readDir } from "@tauri-apps/api/fs";
import { desktopDir } from "@tauri-apps/api/path";
import { useEffect } from "react";
import { useSnippetStore } from "../store/snippetStore";
import SnippetItem from "./SnippetItem";

function SnippetList() 
{
  const setSnippetsNames = useSnippetStore((state) => state.setSnippetsNames);
  const snippetNames = useSnippetStore((state) => state.snippetsNames);

  useEffect(() =>
  {
    async function loadFiles() 
    {
      const desktopPath = await desktopDir();
      const result = await readDir(`${desktopPath}/taurifiles`);
      const filenames = result.map((file) => file.name!);
      setSnippetsNames(filenames);
    }

    loadFiles();
  }, []);

  return (
    <div>
      {snippetNames.map((snippetName) => (
        <div key={snippetName}>
          <SnippetItem snippetName={snippetName} />
        </div>
      ))}
    </div>
  );
}

export default SnippetList;
