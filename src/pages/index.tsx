import { useFieldExtension } from "@hygraph/app-sdk-react";

export default function Home() {
  const { openDialog } = useFieldExtension();

  return (
    <>
      <button
        onClick={() => {
          openDialog("/dialog", { maxWidth: "200px" });
        }}
      >
        Open dialog
      </button>
    </>
  );
}
