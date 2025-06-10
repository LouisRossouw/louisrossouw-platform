import { useMutation, useQuery } from "@tanstack/react-query";
import "./App.css";
import { Button } from "@repo/ui/components/button";
import createClient from "openapi-fetch";
import { useState } from "react";

const validToken = true;

function App() {
  const [pingRestult, setPingRestult] = useState("");

  const { mutateAsync: pingTest, isPending } = useMutation({
    mutationKey: ["ping-test"],
    mutationFn: async () => {
      const api = createClient<any>({
        baseUrl: "http://10.0.0.113:8000",
        headers: {
          ...(validToken ? { Authorization: `Bearer ${null}` } : {}),
        },
      });

      // @ts-ignore
      const { response, data } = await api.GET("/api/ping-me", {
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        return data;
      }
      return undefined;
    },
    onSuccess: (res) => {
      console.log(res);
      setPingRestult(JSON.stringify(res));
    },
    onError: (err) => {
      console.error(err.message);
    },
  });

  // const { data } = useQuery({
  //   queryKey: ["ping-me"],
  //   queryFn: async () => {
  //     const api = createClient<any>({
  //       baseUrl: "http://10.0.0.113:8000",
  //       headers: {
  //         ...(validToken ? { Authorization: `Bearer ${null}` } : {}),
  //       },
  //     });

  //     // @ts-ignore
  //     const { response, data } = await api.GET("/api/ping-me", {
  //       headers: { "Content-Type": "application/json" },
  //     });

  //     if (response.ok) {
  //       alert(JSON.stringify(data));
  //       return data;
  //     }
  //     return undefined;
  //   },
  // });

  return (
    <div className="flex w-full h-screen items-center justify-center">
      <div className="flex items-center justify-center w-1/3 h-1/3 border rounded-lg">
        <div className="grid gap-4">
          <div>Portfolio landing page</div>
          {pingRestult}
          {JSON.stringify(isPending)}
          <Button variant={"destructive"} onClick={() => pingTest()}>
            Test Button
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
