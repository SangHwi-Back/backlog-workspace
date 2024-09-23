import {useState} from "react";
import MDEditor from '@uiw/react-md-editor';

export default function MarkdownEditor() {
    const [value, setValue] = useState('**Hello world!!!**');
    return <>
        <MDEditor value={value} onChange={(value, _event, _contextStore) => {
            if (value) {
                setValue(value)
            }
        }} />
        <MDEditor.Markdown source={value} style={{ whiteSpace: 'pre-wrap' }} />
    </>
}