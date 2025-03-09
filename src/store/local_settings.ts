import { createLocalStorage } from "@solid-primitives/storage"
import { isMobile } from "~/utils/compatibility"
const [local, setLocal, { remove, clear, toJSON }] = createLocalStorage()

export const initialLocalSettings = [
  {
    key: "aria2_rpc_url",
    default: "https://127.0.0.1:443/jsonrpc",
  },
  {
    key: "aria2_rpc_secret",
    default: "",
  },
  {
    key: "position_of_header_navbar",
    default: "static",
    type: "select",
    options: ["static", "sticky", "only_navbar_sticky"],
  },
  {
    key: "global_default_layout",
    default: "list",
    type: "select",
    options: ["list", "grid", "image"],
  },
  {
    key: "show_folder_in_image_view",
    default: "top",
    type: "select",
    options: ["top", "bottom", "none"],
  },
  {
    key: "show_sidebar",
    default: "none",
    type: "select",
    options: ["none", "visible"],
  },
  {
    key: "grid_item_size",
    default: "90",
    type: "number",
  },
  {
    key: "list_item_filename_overflow",
    default: "scrollable",
    type: "select",
    options: ["ellipsis", "scrollable", "multi_line"],
  },
  {
    key: "open_item_on_checkbox",
    default: "direct",
    type: "select",
    options: ["direct", "dblclick", "disable_while_checked"],
  },
]

export type LocalSetting = (typeof initialLocalSettings)[number]
for (const setting of initialLocalSettings) {
  if (!local[setting.key]) {
    setLocal(setting.key, setting.default)
  }
}

export { local, setLocal, remove, clear, toJSON }
