import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "react-quill/dist/quill.bubble.css";

const quillContainerData = [
  ["bold", "italic", "underline", "strike", "blockquote"],
  [{ list: "ordered" }, { list: "bullet" }, { indent: "-4" }, { indent: "+4" }],
  ["link", "image", "video"],
  ["clean"],
];

const quillFormats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
];
function imageHandler() {
  //   const input = document.createElement("input");
  //   input.setAttribute("type", "file");
  //   input.setAttribute("accept", "image/*");
  //   input.click();
  //   input.onchange = async () => {
  //     if (!input?.files) return;
  //     const file = input.files[0];
  //     let formData = new FormData();
  //     formData.append("uri", file);
  //     const range = this.getSelection(true);
  //     this.insertEmbed(
  //       range.index,
  //       "image",
  //       `${window.location.origin}/images/loaders/placeholder.gif`
  //     );
  //     this.setSelection(range.index + 1);
  //     //fetch api call for upload the image
  //     const data = await fetch("" + "/api/upload", {
  //       method: "POST",
  //       headers: {
  //         Authorization: `Bearer ${localStorage.getItem("feathers-jwt")}`,
  //       },
  //       body: formData,
  //     });
  //     const res = await data.json();
  //     this.deleteText(range.index, 1);
  //     this.insertEmbed(range.index, "image", res.url);
  //   };
}
export default function Editor({ state, setState }: any) {
  let quill: any;
  const handleChangeQuillStandart = (textQuillStandart: any) => {
    console.log(textQuillStandart);
    setState({ textQuillStandart });
  };

  return (
    <ReactQuill
      ref={(el) => {
        quill = el;
      }}
      theme="snow"
      className="mb-4"
      value={state.textQuillStandart}
      onChange={(v) => handleChangeQuillStandart(v)}
      modules={{
        toolbar: {
          container: quillContainerData,
          //   handlers: {
          //     image: imageHandler,
          //   },
        },
      }}
      formats={quillFormats}
      preserveWhitespace={true}
    />
  );
}
