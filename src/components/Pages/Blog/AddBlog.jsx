import React, { useEffect, useState } from "react";
import { AreaInput, InputBar } from "../../Tools/Input/Input";
import "./AddBlog.css";

import { AiOutlineCloseCircle, AiOutlineClose } from "react-icons/ai";
import { ImFolderUpload } from 'react-icons/im';

function AddBlog(props) {

    const [sections, setSections] = useState([
        { id: 1, value: '' }
    ]);
    const [subDescriptions, setSubDescriptions] = useState([
        { id: 1, value: '' }
    ]);

    const [subHeadingCount, setSubHeadingCount] = useState(1);

    const [heading, setHeading] = useState("");
    const [description, setDescription] = useState("");
    const [blogFile, setBlogFile] = useState([]);
    const [blogFileName, setBlogFileName] = useState("");

    function handleBlogFile(event) {
        const blog = Array.from(event.target.files);
        setBlogFile(blog);
        setBlogFileName(blog[0].name.substring(0, 17));
    }

    const handleSectionInput = (event, sectionId, type) => {
        if (type === 'subHeading') {
            const updatedSections = sections.map((section) =>
                section.id === sectionId
                    ? { ...section, value: event.target.value }
                    : section
            );
            setSections(updatedSections);
        } else if (type === 'subDescription') {
            const updatedSubDescriptions = subDescriptions.map((subDesc) =>
                subDesc.id === sectionId
                    ? { ...subDesc, value: event.target.value }
                    : subDesc
            );
            setSubDescriptions(updatedSubDescriptions);
        }
    };

    const handleRemoveSection = (sectionId) => {
        if (sections.length > 1) {
            const updatedSections = sections.filter(section => section.id !== sectionId);
            setSections(updatedSections);
        }
    };

    const handleAddSection = () => {
        const newSectionId = subHeadingCount + 1;
        setSubHeadingCount(newSectionId);

        const newSection = { id: newSectionId, value: '' };
        setSections([...sections, newSection]);

        setSubDescriptions([...subDescriptions, { id: newSectionId, value: '' }]);
    };


    function handleSubmit() {
        console.log(sections);
        console.log(subDescriptions);
    }
    // useEffect(() => {
    //     console.log(sections);
    //     console.log(subDescriptions);
    // }, [sections, subDescriptions])

    return (
        <div className="addblog-background" style={props.addPop ? { display: "block" } : { display: "none" }}>
            <div className="addblog-container">
                <button className="close-btn" onClick={() => props.setAdd(false)}><AiOutlineCloseCircle /></button>
                <div className="addblog-content">
                    <div className="blog-heading-section">
                        <label>Heading</label>
                        <InputBar
                            type={"text"}
                            // placeholder={"example: Meditation"}
                            height="25px"
                            width="638px"
                            handleInput={(event) => setHeading(event.target.value)}
                        />
                        <label>Description</label>
                        <AreaInput
                            height="187px"
                            width="545px"
                            handleInput={(event) => setDescription(event.target.value)}
                        />
                    </div>
                    {/* {Array.from({ length: subHeadingCount }).map((_, index) => ( */}
                    {/* {subHeadingSections.map((sectionIndex) => (
                        <div className="blog-subheading-section" id={`section${sectionIndex}`} key={sectionIndex}>

                            <div className="subheading-label">
                                <label>Sub-Heading</label>
                                {subHeadingSections.length > 1 && (
                                    <button onClick={() => DelSubHeadingCount(sectionIndex)}><AiOutlineClose /></button>
                                )}
                            </div>
                            <InputBar
                                type={"text"}
                                height="25px"
                                width="638px"
                            />
                            <label>Sub-Heading Description</label>
                            <AreaInput
                                height="187px"
                                width="545px"
                            />
                        </div>
                    ))}
                    <div className="subheading-add">
                        {subHeadingSections.length < 3 && (
                            <button onClick={AddSubHeadingCount}>Add Other</button>
                        )}
                    </div> */}

                    <div className="addvideo-inputarea addvideo-addother">
                        {sections.map((section) => (
                            <div id={`section${section.id}`} key={section.id}>
                                <div className="remove-section">
                                    {sections.length > 1 && (
                                        <button onClick={() => handleRemoveSection(section.id)}>
                                            Remove
                                        </button>
                                    )}
                                </div>
                                <label>Sub-Heading</label>
                                <InputBar
                                    type="text"
                                    name={`courseVideoWhatYouWillGet${section.id}`}
                                    value={sections.value}
                                    handleInput={(event) => handleSectionInput(event, section.id, 'subHeading')}
                                />
                                <label>Sub-Heading Description</label>
                                <AreaInput
                                    height="187px"
                                    width="545px"
                                    value={subDescriptions.find((subDesc) => subDesc.id === section.id)?.value || ''}
                                    handleInput={(event) => handleSectionInput(event, section.id, 'subDescription')}
                                />
                            </div>
                        ))}
                        <div>
                            <div>
                                {sections.length < 3 && (
                                    <button className="addvideo-addotherBtn" onClick={handleAddSection}>
                                        Add Other
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="file-input">
                        <div className="input-left">
                            <div className="left-title">Upload Image For Blog</div>
                            <div className="input-border">
                                <label>
                                    <input
                                        type="file"
                                        className="custom-input"
                                        accept=".doc,.docx,application/pdf"
                                        onChange={handleBlogFile}
                                    />
                                </label>
                                <ImFolderUpload />
                                <span className="input-text">Drag & drop files here</span>
                                <span className="input-text">File Supported: docx, pdf, etc.</span>
                                <span className="input-btn">Browse Files</span>
                                <span className="input-text">Maximum size: 250mb</span>
                            </div>
                        </div>
                        <div className="input-right">
                            {blogFile.length > 0 ? (
                                <>
                                    <div>File Name: {blogFileName} {blogFileName.length > 17 ? (<span>...</span>) : (null)}</div>
                                    <button onClick={() => {
                                        setBlogFileName("");
                                        setBlogFile([]);
                                    }}>Remove</button>
                                </>
                            ) : (
                                <div className="NotUploaded">Upload a File</div>
                            )}
                        </div>
                    </div>
                    <div className="addblog-buttons">
                        <button className="save-button" onClick={handleSubmit}>Save</button>
                        <button className="cancel-button">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddBlog;