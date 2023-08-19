import SnippetForm from "./components/SnippetForm";
import SnippetList from "./components/SnippetList";
import SnippetEditor from "./components/SnippetEditor";

function App() 
{
  return (
    <div className='h-screen text-white grid grid-cols-12'>
      <section className='col-span-3 bg-zinc-950'>
        <SnippetForm />
        <SnippetList />
      </section>
      
      <section className='col-span-9 bg-neutral-950 flex justify-center'>
        <SnippetEditor />
      </section>
    </div>
  )
}

export default App;
