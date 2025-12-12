import React from 'react';
import {WindowControls} from "#Components/index.js";
import WindowWrapper from "#hoc/WindowWrapper.jsx";
import useWindowStore from "#store/window.js";

const Image = () => {
    const {windows} = useWindowStore();
    const data = windows?.imgfile?.data;

    if (!data) return null;

    const { name, imageUrl, description } = data;

    const fallbackDescription = name ? `Photo: ${name}` : 'Photo';

    return (
        <>
            <div id="window-header">
                <WindowControls target="imgfile" />
                <h2>{name}</h2>
            </div>

            <div className="p-5 h-full bg-white flex flex-col">
                {name && (
                    <h3 className="text-xl font-semibold mb-3">{name}</h3>
                )}

                <div className="flex-1 grid place-items-center overflow-auto">
                    {imageUrl && (
                        <img
                            src={imageUrl}
                            alt={name || 'image file'}
                            className="max-h-full max-w-full object-contain rounded"
                        />
                    )}
                </div>

                <p className="mt-3 text-xs text-gray-500">
                    {description || fallbackDescription}
                </p>
            </div>
        </>
    );
};

const ImageWindow = WindowWrapper(Image, "imgfile");

export default ImageWindow;
