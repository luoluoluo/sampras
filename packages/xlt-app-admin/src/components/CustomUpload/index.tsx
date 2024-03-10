import { Upload } from "antd";
import * as Icons from "@ant-design/icons";
const baseUrl = import.meta.env.VITE_API_URL;
const uploadButton = (
  <button style={{ border: 0, background: "none" }} type="button">
    <Icons.PlusOutlined />
    <div style={{ marginTop: 8 }}>Upload</div>
  </button>
);
interface Value {
  fileId: string;
}
const Index = (props: { max?: number; value?: Value[]; onChange?: (value?: Value[]) => void }) => {
  // const [fileList, setFileList] = useState<UploadFile[]>([]);
  const value = props.value || [];
  const max = props.max || 1;
  // const [defaultFileList, setDefaultFileList] = useState<any[]>([]);
  // useEffect(() => {
  //   setDefaultFileList(
  //     value.map(v => ({
  //       uid: v.fileId,
  //       name: v.fileId,
  //       url: `${baseUrl}/file?id=${v.fileId}`,
  //       status: "done"
  //     }))
  //   );
  //   // const defaultFileList = value.map(v => ({
  //   //   uid: v.fileId,
  //   //   name: v.fileId,
  //   //   url: `${baseUrl}/file?id=${v.fileId}`
  //   // }));
  // }, [value]);
  const defaultFileList = value.map(v => ({
    uid: v.fileId,
    name: v.fileId,
    url: `${baseUrl}/file?id=${v.fileId}`
    // status: "done"
  }));
  console.log(value.length, props, defaultFileList);
  return (
    <Upload
      name="file"
      listType="picture-card"
      defaultFileList={defaultFileList}
      maxCount={props.max}
      action={`${baseUrl}/file`}
      onChange={e => {
        const findIndex = e.fileList?.findIndex(file => file.uid === e.file.uid);
        switch (e.file.status) {
          case "done":
            console.log(e);
            props.onChange &&
              props.onChange([
                ...(props?.value || []),
                {
                  fileId: e.file.response.id
                }
              ]);
            break;
          case "removed":
            value?.splice(findIndex, 1);
            props.onChange && props.onChange([...value]);
            break;
          default:
            break;
        }
        console.log(e, "2233");
      }}
    >
      {value.length >= max ? null : uploadButton}
    </Upload>
  );
};

export default Index;
