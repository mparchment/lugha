import {useEffect, useRef, useState} from 'react'
import {IconButton} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import ld from 'levantinetransliterator'

function Editor() {

    const ref = useRef(null);
    const [wordArr, setWordArr] = useState([]);
    const [currWord, setCurrWord] = useState('')

    useEffect(() => {
        setWordArr(wordArr)
        ref.current.value = wordArr.join('')
    }, [wordArr])

    /*
    function getTransliteration() {
        return fetch(`https://thingproxy.freeboard.io/fetch/https://transliterate.qcri.org/en2ar/${currWord}`)
            .then((response) => response.json())
            .then((responseJson) => {
                return responseJson.results;
            })
            .catch((error) => {
                console.error(error)
            })
    }
    */

    const handleChange = (e) => {
        if (e.key === ' ' && ref.current.value.split(' ').at(-1) !== ' ') {
            setWordArr([...wordArr, ld.transliterate(currWord)[0], ' '])
        }

        setCurrWord(ref.current.value.split(' ').at(-1))
    }

    return (
        <>
            <div className="editor-bg">
                <div className="editor">
                    <textarea
                        ref={ref}
                        onKeyUp={handleChange}
                    />
                </div>
            </div>
            <div className="selector">
                    <span className="clear">
                        <IconButton disableRipple
                                    onClick={() => {
                                        ref.current.value = '';
                                        setWordArr([]);
                                    }}
                                    style={{ color: '#000', backgroundColor: 'transparent' }}>
                            <span>Clear</span>
                            <ClearIcon className="clear-icon"/>
                        </IconButton>
                    </span>
            </div>
        </>
    )
}

export default Editor;