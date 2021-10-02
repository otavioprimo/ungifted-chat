import * as ImagePicker from "expo-image-picker";

import { Attachment } from "../@types/Attachment";

class FilePicker {
  async pickFile() {
    const pickedFile = await this.pickImageAndVideo();
    return pickedFile;
  }

  private async pickImageAndVideo(): Promise<Attachment | undefined> {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") return;

    let result: any = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      quality: 0.7,
    });

    return {
      height: result.height,
      type: result.type,
      uri: result.uri,
      width: result.width,
      duration: result.duration,
    };
  }
}

export default new FilePicker();
