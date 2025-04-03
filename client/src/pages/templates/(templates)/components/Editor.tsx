import { Button, Input, Tooltip } from 'antd';
import React from 'react';
import { Bold, Italic, Strikethrough, Plus } from 'lucide-react';

interface EditorProps {
    maxCount?: number;
}

const Editor: React.FC<EditorProps> = ({ maxCount }) => {
    const [body, setBody] = React.useState<string>('');
    const textareaRef = React.useRef<HTMLTextAreaElement>(null);

    const handleChange = React.useCallback(
        (e: React.ChangeEvent<HTMLTextAreaElement>) => {
            setBody(e.target.value);
        },
        [],
    );

    const applyFormatting = (format: 'bold' | 'italic' | 'strike') => {
        const textarea = textareaRef.current;
        if (!textarea) return;

        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        const selectedText = body.substring(start, end);

        if (!selectedText) return;

        let prefix = '', suffix = '';
        switch (format) {
            case 'bold':
                prefix = '*';
                suffix = '*';
                break;
            case 'italic':
                prefix = '_';
                suffix = '_';
                break;
            case 'strike':
                prefix = '~';
                suffix = '~';
                break;
        }

        const isAlreadyFormatted = body.substring(start - prefix.length, start) === prefix &&
                                   body.substring(end, end + suffix.length) === suffix;

        let updatedText = '';

        if (isAlreadyFormatted) {
            updatedText = body.substring(0, start - prefix.length) +
                          selectedText +
                          body.substring(end + suffix.length);
        } else {
            updatedText = body.substring(0, start) +
                          prefix + selectedText + suffix +
                          body.substring(end);
        }

        setBody(updatedText);
        textarea.focus();
        textarea.setSelectionRange(start + prefix.length, end + prefix.length);
    };

    return (
        <div>
            <Input.TextArea
                ref={textareaRef}
                value={body}
                onChange={handleChange}
                className={
                    body.length > (maxCount ?? 0)
                        ? 'border !border-red-500'
                        : ''
                }
                placeholder="Hello"
                count={{
                    max: maxCount || 1024,
                }}
            />
            <div className="flex items-start justify-between py-4">
                <p className="text-gray-600 text-sm">
                    {' '}
                    {body.length} / {maxCount}
                </p>
                <div className="flex items-center justify-end gap-5">
                    <Tooltip
                        title={<p className="text-gray-800">Bold text</p>}
                        color="white"
                    >
                        <Bold
                            size={30}
                            className="text-gray-600 border p-1 rounded-md hover:bg-gray-100"
                            onClick={() => applyFormatting('bold')}
                        />
                    </Tooltip>
                    <Tooltip
                        title={<p className="text-gray-800">Italic text</p>}
                        color="white"
                    >
                        <Italic
                            size={30}
                            className="text-gray-600 border p-1 rounded-md hover:bg-gray-100"
                            onClick={() => applyFormatting('italic')}
                        />
                    </Tooltip>
                    <Tooltip
                        title={<p className="text-gray-800">Cut text</p>}
                        color="white"
                    >
                        <Strikethrough
                            size={30}
                            className="text-gray-600 border p-1 rounded-md hover:bg-gray-100"
                            onClick={() => applyFormatting('strike')}
                        />
                    </Tooltip>
                    <Button icon={<Plus size={18} className="mt-1" />}>
                        Add vaiable
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default React.memo(Editor);
