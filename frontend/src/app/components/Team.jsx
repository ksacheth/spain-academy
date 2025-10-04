import ScrollStack, { ScrollStackItem } from "../templates/ScrollStack";

export default function Team() {
  return (
    <div className="h-screen w-screen">
      <ScrollStack>
        <ScrollStackItem itemClassName="bg-VividYellow h-[28rem]">
          <h1 className="text-white font-bold text-5xl">The Team</h1>
        </ScrollStackItem>
        <ScrollStackItem itemClassName="bg-VividGreen h-[28rem]">
          <h1 className="text-white font-bold text-5xl">The Team</h1>
        </ScrollStackItem>
        <ScrollStackItem itemClassName="bg-VividRed h-[28rem]">
         <h1 className="text-white font-bold text-5xl">The Team</h1>
        </ScrollStackItem>
      </ScrollStack>
    </div>
  );
}
