import { Button } from "@repo/ui"

function App() {
  return (
    <>
      <div className="flex flex-row gap-4">
        <p>One</p>
        <p>Two</p>
        <Button variant={"destructive"} onClick={() => console.log("Clicked")}>
          Button
        </Button>
      </div>
    </>
  )
}

export default App
