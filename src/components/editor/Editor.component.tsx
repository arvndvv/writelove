import { useRef } from "react";
import "./Editor.styles.scss";
import { Editor } from "@tinymce/tinymce-react";
import "tinymce/icons/default";

export default function WriteEditor({ state, setState }: any) {
  const editorRef: any = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };
  function test(x) {
    console.log(x);
  }
  return (
    <>
      <Editor
        onChange={log}
        apiKey={process.env.REACT_APP_TINYMCE_API_KEY}
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue="<p>Write your content.</p>"
        init={{
          height: 500,
          menubar: false,
          paste_data_images: true,
          plugins: [
            "advlist autolink lists link image imagetools  charmap print preview anchor code",
            "searchreplace visualblocks  fullscreen",
            "emoticons",
            "insertdatetime media table paste help wordcount tinycomments",
          ],
          toolbar:
            "undo redo | blocks fontfamily fontsize  | bold italic underline strikethrough code | emoticons image | align lineheight | checklist numlist bullist indent outdent | removeformat",
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
          images_upload_handler: async function (blobInfo, success, failure) {
            const base64 = await blobInfo.base64();
            return success(base64);
          } as any,
          tinycomments_mode: "embedded",
          tinycomments_author: "currentAuthor",
        }}
      />
    </>
  );
}
