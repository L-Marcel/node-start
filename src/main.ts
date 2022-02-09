import app from ".";
import { getInfo } from "./utils/info";
app.listen(3333, () => getInfo("🚀 Server is running!"));