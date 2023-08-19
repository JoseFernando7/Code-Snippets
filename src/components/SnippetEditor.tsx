import { Editor } from "@monaco-editor/react";
import { useSnippetStore } from "../store/snippetStore";
import { useEffect, useState } from "react";
import { desktopDir } from "@tauri-apps/api/path";
import { writeTextFile } from "@tauri-apps/api/fs";

function SnippetEditor() 
{
  const selectedSnippet = useSnippetStore((state) => state.selectedSnippet);
  const [text, setText] = useState<string | undefined>('');

  useEffect(() => 
  {
    if (!selectedSnippet) return;

    const saveSnippet = setTimeout(async () =>
    {
      const desktopPath = await desktopDir();
      await writeTextFile(`${desktopPath}/taurifiles/${selectedSnippet}.txt`, text ?? '');
    }, 2000);

    return () => 
    {
      clearTimeout(saveSnippet);
    }
  }, [text]);

  return (
    <>
      {selectedSnippet ? (
        <Editor 
          theme="vs-dark"
          defaultLanguage="javascript"
          options={{
            fontSize: 20,
          }}
          onChange={(value) => setText(value)}
          value={text}
        />
      ) : (
        <h1>Select a snippet to edit</h1>
      )}
    </>
  );
}

export default SnippetEditor;
