
'use client';

interface VideoPlayerProps {
    src: string;
    title: string;
}

export default function VideoPlayer({ src, title }: VideoPlayerProps) {
    return (
        <div className="aspect-video">
            <video controls autoPlay className="w-full h-full" title={title}>
                <source src={src} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
}
