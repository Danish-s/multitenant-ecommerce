import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";  

import { useEffect } from "react";

export default function Home() {
  return (
    <div className="p-4">
    <div className="flex flex-col gap-y-4">
      <div>
        <Button variant="elevated">
          Hello I am a button
        </Button>
      </div>
      <div>
       <Input placeholder="I am an Input" />
      </div>
      <div>
        <Progress value={50} />
      </div>  
      <div>
        <Textarea placeholder="I am a Text Area" />
      </div>
      <div>
        <Checkbox  />
      </div>
    </div>
    </div>
  );
};
