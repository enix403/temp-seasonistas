import { repeatNode } from "@/lib/utils";

export function ScrollTest({ count = 100 }: { count?: number }) {
  return (
    <>
      {repeatNode(count, index => (
        <p>{index + 1}</p>
      ))}
    </>
  );
}
