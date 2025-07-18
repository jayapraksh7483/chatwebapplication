import React from 'react';

const MessageSkeleton = () => {
    return (
        <>
            {/* Left-aligned skeleton (incoming message) */}
            <div className="flex gap-3 items-center mb-4">
                <div className="skeleton w-10 h-10 rounded-full shrink-0"></div>
                <div className="flex flex-col gap-2">
                    <div className="skeleton h-4 w-28"></div>
                    <div className="skeleton h-4 w-40"></div>
                </div>
            </div>

            {/* Right-aligned skeleton (outgoing message) */}
            <div className="flex gap-3 items-center justify-end">
                <div className="flex flex-col gap-2 items-end">
                    <div className="skeleton h-4 w-40"></div>
                </div>
                <div className="skeleton h-10 w-10 rounded-full shrink-0"></div>
            </div>
        </>
    );
};

export default MessageSkeleton;
