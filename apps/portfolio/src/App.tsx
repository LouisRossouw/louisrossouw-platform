import "./App.css";
import { Button } from "@repo/ui/components/button";

function App() {
  return (
    <div className="flex w-full h-screen items-center justify-center">
      <div className="flex items-center justify-center w-1/3 h-1/3 border rounded-lg">
        <div className="grid gap-4">
          <div>Portfolio landing page</div>
          <Button variant={"destructive"} onClick={() => alert("test")}>
            Test Button
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
