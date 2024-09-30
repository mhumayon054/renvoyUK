import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { parseUrlFromModel } from '../../../../helpers/asset'
import { handleModel } from '../../../../redux/layoutSlices/modelSlice';

export default function VideoCard(item) {
    const modelsArgs = useSelector(
        (state) => state.model?.modelArgs?.contentModel
      );
      const d = useDispatch();

      const handleImages = () => {
        if (modelsArgs?.videos && modelsArgs?.videos.length) {
          if (modelsArgs?.videos?.some((k) => k.id == item.id)) {
            return modelsArgs.videos.filter((k) => k.id != item.id);
          } else {
            return [...modelsArgs?.videos, item];
          }
        }
        return [item];
      };
      const args = {
        ...modelsArgs,
        ...(modelsArgs?.type == "video"
            ? { video: item }
            : { videos: handleImages() }),
    };

    const closeModel = () => {
        if (modelsArgs?.callBack) modelsArgs.callBack(args[modelsArgs.type]);
        d(handleModel({ model: "contentModel", state: false }));
    };
    return (
        <div className="col-lg-4"
            onClick={() => {
                if (modelsArgs?.type == "video" || modelsArgs?.type == "videos") {
                    d(
                        handleModel({
                            model: "contentModel",
                            state: true,
                            args,
                        })
                    );
                    closeModel();
                }
            }}
        >
            <video
                controls
                src={
                    parseUrlFromModel(item) ??
                    require("../../../../images/video.MP4")
                }
            ></video>
        </div>
    )
}
