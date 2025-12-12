import React from 'react';
import {WindowControls} from "#Components/index.js";
import WindowWrapper from "#hoc/WindowWrapper.jsx";
import useWindowStore from "#store/window.js";

const Text = () => {
    const {windows} = useWindowStore();
    const data = windows?.txtfile?.data;

    if (!data) return null;

    const {name, image, subtitle, description} = data;

    return (
        <>
            <div id="window-header">
                <WindowControls target="txtfile" />
                <h2>{name}</h2>
            </div>

            <div className="p-5 space-y-4 overflow-auto h-full bg-white">
                {name && (
                    <h3 className="text-xl font-semibold">{name}</h3>
                )}

                {subtitle && (
                    <p className="text-sm text-gray-600">{subtitle}</p>
                )}

                {image && (
                    <img
                        src={image}
                        alt={name || 'text file image'}
                        className="w-full max-h-[70vh] object-contain rounded mx-auto"
                    />
                )}

                {Array.isArray(description) && description.length > 0 && (
                    <div className="space-y-3">
                        {description.map((para, idx) => (
                            <p key={idx} className="text-sm leading-6 text-gray-800">
                                {para}
                            </p>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
};

const TextWindow = WindowWrapper(Text, "txtfile");

export default TextWindow;
