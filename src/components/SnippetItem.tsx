import { useSnippetStore } from "../store/snippetStore";

interface Props 
{
  snippetName: string;
}

function SnippetItem({ snippetName }: Props) 
{
  const setSelectedSnippet = useSnippetStore((state) => state.setSelectedSnippet);
  const selectedSnippet = useSnippetStore((state) => state.selectedSnippet);

  return (
    <section 
    className={`py-2 px-4 hover:bg-neutral-900 hover:cursor-pointer ${selectedSnippet === snippetName ? 'bg-sky-500' : 'bg-zinc-950'}`}
    onClick={() => setSelectedSnippet(snippetName)}>
      <h1> {snippetName} </h1>
    </section>
  )
}

export default SnippetItem