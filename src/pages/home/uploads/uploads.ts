import { objStore } from "~/store"
import { FormUpload } from "./form"
import { StreamUpload } from "./stream"
import { Upload } from "./types"

type Uploader = {
  upload: Upload
  name: string
  provider: RegExp
}

const AllUploads: Uploader[] = [
  {
    name: "流式",
    upload: StreamUpload,
    provider: /.*/,
  },
  {
    name: "表单",
    upload: FormUpload,
    provider: /.*/,
  },
]

export const getUploads = (): Pick<Uploader, "name" | "upload">[] => {
  return AllUploads.filter((u) => u.provider.test(objStore.provider))
}
