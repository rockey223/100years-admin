import React, { useEffect, useState } from "react";
import "./AddBlog.css";
import { AreaInput, InputBar } from "../../Tools/Input/Input";
import { ImFolderUpload } from "react-icons/im";
import { IoIosArrowBack } from "react-icons/io";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useMainContext } from "../../Useful/MainContext";

function EditBlog() {
  const [category, setCategory] = useState([]);
  const { editId, setEditId } = useMainContext();
  const [blogData, setBlogData] = useState([]);

  //Show Subtitle & Image Section
  const [showSubtitle1, setShowSubtitle1] = useState(false);
  const [showImage1, setShowImage1] = useState(false);
  const [showSubtitle2, setShowSubtitle2] = useState(false);
  const [showImage2, setShowImage2] = useState(false);

  //Data store
  const [blogCategory, setBlogCategory] = useState("");
  const [blogTitle, setBlogTitle] = useState("");
  const [blogThumbnail, setBlogThumbnail] = useState([]);
  const [blogBanner, setBlogBanner] = useState([]);
  const [blogDescription, setBlogDescription] = useState("");
  const [blogSubtitle1, setBlogSubtitle1] = useState("");
  const [blogSubDescription1, setBlogSubDescription1] = useState("");
  const [blogSubImage1, setBlogSubImage1] = useState([]);
  const [blogSubtitle2, setBlogSubtitle2] = useState("");
  const [blogSubDescription2, setBlogSubDescription2] = useState("");
  const [blogSubImage2, setBlogSubImage2] = useState([]);
  const [thumbnailURL, setThumbnailURL] = useState("");
  const [bannerURL, setBannerURL] = useState("");
  const [subImage1URL, setSubImage1URL] = useState("");
  const [subImage2URL, setSubImage2URL] = useState("");

  const [loading, setLoading] = useState(false);
  const API = `${process.env.REACT_APP_API}/api`;
  const imageApi = `${process.env.REACT_APP_API}/imageUploads`;
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API}/getAllCompanyBlogCategory`, { withCredentials: true })
      .then((res) => setCategory(res.data.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (editId) {
      axios
        .get(`${API}/getOneCompanyBlog/${editId}`, { withCredentials: true })
        .then((res) => {
          setBlogData(res.data.data);
          const BData = res.data.data;
          const categoryId = BData.companyBlogCategory;
          // console.log(categoryId)
          const categoryName = category
            .filter((item) => item._id === categoryId)
            .map((item) => item.companyBlogCategoryName);
          setBlogCategory(categoryName);
          setBlogTitle(BData.companyBlogTitle);
          setThumbnailURL(`${imageApi}/${BData.companyBlogThumbnail}`);
          setBlogThumbnail([BData.companyBlogThumbnail]);
          setBannerURL(`${imageApi}/${BData.companyBlogImage}`);
          setBlogBanner([BData.companyBlogImage]);
          setBlogDescription(BData.companyBlogContent);
          if (BData.hasOwnProperty("companyBlogSubtitleOne")) {
            setBlogSubtitle1(BData.companyBlogSubtitleOne);
          }
          if (BData.hasOwnProperty("companyBlogSubtitleOneContent")) {
            setBlogSubDescription1(BData.companyBlogSubtitleOneContent);
          }
          if (BData.hasOwnProperty(`companyBlogSubtitleOneImage`)) {
            setSubImage1URL(`${imageApi}/${BData.companyBlogSubtitleOneImage}`);
            setShowImage1(true);
          }
          if (BData.hasOwnProperty("companyBlogSubtitleTwo")) {
            setBlogSubtitle2(BData.companyBlogSubtitleTwo);
            setShowSubtitle2(true);
          }
          if (BData.hasOwnProperty("companyBlogSubtitleTwoContent")) {
            setBlogSubDescription2(BData.companyBlogSubtitleTwoContent);
          }
          if (BData.hasOwnProperty(`companyBlogSubtitleTwoImage`)) {
            setSubImage2URL(`${imageApi}/${BData.companyBlogSubtitleTwoImage}`);
            setShowImage2(true);
          }
        })
        .catch((err) => console.log(err));
    }
  }, [editId, category]);

  function handleThumbnail(event) {
    const image = Array.from(event.target.files);
    const maxSize = 5242880;

    if (image[0].size > maxSize) {
      toast.error(`Max file size: 5MB!`);
      event.target.value = null;
    } else {
      setBlogThumbnail(image);

      const url = URL.createObjectURL(image[0]);
      setThumbnailURL(url);
    }
  }

  function handleBanner(event) {
    const image = Array.from(event.target.files);
    const maxSize = 5242880;

    if (image[0].size > maxSize) {
      toast.error(`Max file size: 5MB!`);
      event.target.value = null;
    } else {
      setBlogBanner(image);

      const url = URL.createObjectURL(image[0]);
      setBannerURL(url);
    }
  }

  function handleImage1(event) {
    const image = Array.from(event.target.files);
    const maxSize = 5242880;

    if (image[0].size > maxSize) {
      toast.error(`Max file size: 5MB!`);
      event.target.value = null;
    } else {
      setBlogSubImage1(image);

      const url = URL.createObjectURL(image[0]);
      setSubImage1URL(url);
    }
  }

  function handleImage2(event) {
    const image = Array.from(event.target.files);
    const maxSize = 5242880;

    if (image[0].size > maxSize) {
      toast.error(`Max file size: 5MB!`);
      event.target.value = null;
    } else {
      setBlogSubImage2(image);

      const url = URL.createObjectURL(image[0]);
      setSubImage2URL(url);
    }
  }

  function handleSubmit() {
    setLoading(true);

    if (
      !blogCategory ||
      !blogTitle ||
      blogThumbnail.length === 0 ||
      blogBanner.length === 0 ||
      !blogDescription
    ) {
      toast.error("Please fill in all required fields *");
      setLoading(false);
      return;
    }

    const categoryId = category
      .filter((item) => item.companyBlogCategoryName === blogCategory)
      .map((item) => item._id);

    // console.log(blogThumbnail[0]);
    // console.log(blogData.companyBlogThumbnail);

    // if (blogData.companyBlogThumbnail === blogThumbnail[0]) {
    // }

    axios
      .patch(
        `${API}/updateCompanyBlog/${editId}`,
        {
          companyBlogCategory: categoryId,
          companyBlogTitle: blogTitle,
          companyBlogContent: blogDescription,

          ...(blogData.companyBlogThumbnail === blogThumbnail[0]
            ? {
                companyBlogThumbnail: blogThumbnail[0],
              }
            : blogThumbnail.length > 0
            ? {
                companyBlogThumbnail: blogThumbnail[0],
              }
            : {}),
          ...(blogData.companyBlogImage === blogBanner[0]
            ? {
                companyBlogImage: blogBanner[0],
              }
            : blogBanner.length > 0
            ? {
                companyBlogImage: blogBanner[0],
              }
            : {}),

          ...(blogSubtitle1 ? { companyBlogSubtitleOne: blogSubtitle1 } : {}),
          ...(blogSubDescription1
            ? { companyBlogSubtitleOneContent: blogSubDescription1 }
            : {}),

          ...(blogData.companyBlogSubtitleOneImage === blogSubImage1[0]
            ? {
                companyBlogSubtitleOneImage: blogSubImage1[0],
              }
            : blogSubImage1.length > 0
            ? {
                companyBlogSubtitleOneImage: blogSubImage1[0],
              }
            : {}),

          ...(blogSubtitle2 ? { companyBlogSubtitleTwo: blogSubtitle2 } : {}),
          ...(blogSubDescription2
            ? { companyBlogSubtitleTwoContent: blogSubDescription2 }
            : {}),
          ...(blogData.companyBlogSubtitleTwoImage === blogSubImage2[0]
            ? {
                companyBlogSubtitleTwoImage: blogSubImage2[0],
              }
            : blogSubImage2.length > 0
            ? {
                companyBlogSubtitleTwoImage: blogSubImage2[0],
              }
            : {}),
        },
        {
          headers: { "Content-Type": "multipart/form-data" },
          withCredentials: true,
        }
      )
      .then((res) => {
        setLoading(false);
        toast.success(`Blog Updated`);
      })
      .catch((err) => console.log(err));
  }

  function ClearData() {
    setBlogTitle("");
    setBlogCategory("");
    setBlogThumbnail([]);
    setBlogBanner([]);
    setBlogDescription("");
    setBlogSubtitle1("");
    setBlogSubDescription1("");
    setBlogSubImage1([]);
    setBlogSubtitle2("");
    setBlogSubDescription2("");
    setBlogSubImage2([]);
    setBlogData([]);
    setThumbnailURL("");
    setBannerURL("");
    setSubImage1URL("");
    setSubImage2URL("");
    setLoading(false);
    navigate(`/admin/blog`);
  }

  return (
    <div className="add-blog-container">
      <ToastContainer />
      <div className="title-top">Edit Blog</div>
      <div className="back-button" onClick={ClearData}>
        <IoIosArrowBack /> <span>Back</span>
      </div>

      <div className="addblog-form-container">
        <div className="input-area">
          <label>
            Category<span style={{ color: "red" }}>*</span>
          </label>
          <select
            value={blogCategory}
            style={
              blogCategory === "Select Category"
                ? { backgroundColor: "#eaecf0" }
                : { backgroundColor: "white" }
            }
            onChange={(event) => setBlogCategory(event.target.value)}
          >
            <option value={""}>Select Category</option>
            {category.map((item) => {
              return (
                <>
                  <option key={item._id} value={item.companyBlogCategoryName}>
                    {item.companyBlogCategoryName}
                  </option>
                </>
              );
            })}
          </select>
        </div>
        <div className="input-area">
          <label>
            Blog Title<span style={{ color: "red" }}>*</span>
          </label>
          <InputBar
            placeholder="This contains fundamentals of social and mental health"
            height={"60px"}
            value={blogTitle}
            handleInput={(event) => setBlogTitle(event.target.value)}
          />
        </div>
        <div className="blog-upload-image">
          <label>
            Upload Thumbnail & Banner Image
            <span style={{ color: "red" }}>*</span>
          </label>
          <div className="image-input">
            <div className="image-left">
              <div className="left-title">Upload Thumbnail</div>
              {blogThumbnail.length === 0 && !thumbnailURL ? (
                <div className="image-border">
                  <label>
                    <input
                      type="file"
                      className="custom-input"
                      accept=".png,.jpg,.jpeg"
                      onChange={handleThumbnail}
                    />
                  </label>
                  <ImFolderUpload />
                  <span className="input-text">Drag & drop files here</span>
                  <span className="input-text">
                    File Supported: png, jpg, jpeg.
                  </span>
                  <span className="image-input-btn">Browse Files</span>
                  <span className="input-text">Maximum size: 500mb</span>
                </div>
              ) : (
                <div className="image-uploaded">
                  <button
                    onClick={() => {
                      setBlogThumbnail([]);
                      setThumbnailURL("");
                    }}
                  >
                    Remove
                  </button>
                  <img src={thumbnailURL} height={"195px"} width={"300px"} />
                </div>
              )}
            </div>
            <div className="image-right">
              <div className="left-title">Upload Banner Image</div>
              {blogBanner.length === 0 && !bannerURL ? (
                <div className="image-border">
                  <label>
                    <input
                      type="file"
                      className="custom-input"
                      accept=".png, .jpg,.jpeg"
                      onChange={handleBanner}
                    />
                  </label>
                  <ImFolderUpload />
                  <span className="input-text">Drag & drop files here</span>
                  <span className="input-text">
                    File Supported: png, jpg, jpeg.
                  </span>
                  <span className="image-input-btn">Browse Files</span>
                  <span className="input-text">Maximum size: 500mb</span>
                </div>
              ) : (
                <div className="image-uploaded">
                  <button
                    onClick={() => {
                      setBlogBanner([]);
                      setBannerURL("");
                    }}
                  >
                    Remove
                  </button>
                  <img src={bannerURL} height={"195px"} width={"300px"} />
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="input-area">
          <label>
            Description<span style={{ color: "red" }}>*</span>
          </label>
          <AreaInput
            height={"200px"}
            width={"89.5%"}
            value={blogDescription}
            handleInput={(event) => setBlogDescription(event.target.value)}
          />
        </div>

        {!showSubtitle1 && !blogSubtitle1 ? (
          <div className="add-sub-content-button">
            <button
              onClick={() => {
                setShowSubtitle1(true);
              }}
            >
              Add Sub Content
            </button>
          </div>
        ) : (
          <>
            <div className="input-area">
              <div className="label-minus">
                <label>Sub-Title</label>
                <AiOutlineMinusCircle
                  onClick={() => {
                    setShowSubtitle1(false);
                    setBlogSubtitle1("");
                    setBlogSubDescription1("");
                    setBlogSubImage1([]);
                  }}
                />
              </div>
              <InputBar
                height={"60px"}
                value={blogSubtitle1}
                handleInput={(event) => setBlogSubtitle1(event.target.value)}
              />
            </div>
            <div className="input-area">
              <label>Sub-Description</label>
              <AreaInput
                height={"200px"}
                width={"89.5%"}
                value={blogSubDescription1}
                handleInput={(event) =>
                  setBlogSubDescription1(event.target.value)
                }
              />
            </div>

            {!showImage1 ? (
              <div className="add-image-section">
                <button
                  onClick={() => {
                    setShowImage1(true);
                  }}
                >
                  Add Image
                </button>
              </div>
            ) : (
              <div className="blog-upload-image">
                <div className="label-minus">
                  <label>Upload Image</label>
                  <AiOutlineMinusCircle
                    onClick={() => {
                      setShowImage1(false);
                      setBlogSubImage1([]);
                    }}
                  />
                </div>
                <div className="image-input">
                  <div className="image-left">
                    {blogSubImage1.length === 0 && !subImage1URL ? (
                      <div className="image-border">
                        <label>
                          <input
                            type="file"
                            className="custom-input"
                            accept=".png,.jpg,.jpeg"
                            onChange={handleImage1}
                          />
                        </label>
                        <ImFolderUpload />
                        <span className="input-text">
                          Drag & drop files here
                        </span>
                        <span className="input-text">
                          File Supported: png, jpg, jpeg.
                        </span>
                        <span className="image-input-btn">Browse Files</span>
                        <span className="input-text">Maximum size: 500mb</span>
                      </div>
                    ) : (
                      <div className="image-uploaded">
                        <button
                          onClick={() => {
                            setBlogSubImage1([]);
                            setSubImage1URL("");
                          }}
                        >
                          Remove
                        </button>
                        <img
                          src={subImage1URL}
                          height={"195px"}
                          width={"300px"}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </>
        )}
        {!showSubtitle2 ? (
          <div className="add-sub-content-button">
            <button
              onClick={() => {
                setShowSubtitle2(true);
              }}
            >
              Add Sub Content
            </button>
          </div>
        ) : (
          <>
            <div className="input-area">
              <div className="label-minus">
                <label>Sub-Title</label>
                <AiOutlineMinusCircle
                  onClick={() => {
                    setShowSubtitle2(false);
                    setBlogSubtitle2("");
                    setBlogSubDescription2("");
                    setBlogSubImage2([]);
                  }}
                />
              </div>
              <InputBar
                height={"60px"}
                value={blogSubtitle2}
                handleInput={(event) => setBlogSubtitle2(event.target.value)}
              />
            </div>
            <div className="input-area">
              <label>Sub-Description</label>
              <AreaInput
                height={"200px"}
                width={"89.5%"}
                value={blogSubDescription2}
                handleInput={(event) =>
                  setBlogSubDescription2(event.target.value)
                }
              />
            </div>

            {!showImage2 ? (
              <div className="add-image-section">
                <button
                  onClick={() => {
                    setShowImage2(true);
                  }}
                >
                  Add Image
                </button>
              </div>
            ) : (
              <div className="blog-upload-image">
                <div className="label-minus">
                  <label>Upload Image</label>
                  <AiOutlineMinusCircle
                    onClick={() => {
                      setShowImage2(false);
                      setBlogSubImage2([]);
                    }}
                  />
                </div>
                <div className="image-input">
                  <div className="image-left">
                    {blogSubImage2.length === 0 && !subImage2URL ? (
                      <div className="image-border">
                        <label>
                          <input
                            type="file"
                            className="custom-input"
                            accept=".png,.jpg,.jpeg"
                            onChange={handleImage2}
                          />
                        </label>
                        <ImFolderUpload />
                        <span className="input-text">
                          Drag & drop files here
                        </span>
                        <span className="input-text">
                          File Supported: png, jpg, jpeg.
                        </span>
                        <span className="image-input-btn">Browse Files</span>
                        <span className="input-text">Maximum size: 500mb</span>
                      </div>
                    ) : (
                      <div className="image-uploaded">
                        <button
                          onClick={() => {
                            setBlogSubImage2([]);
                            setSubImage2URL("");
                          }}
                        >
                          Remove
                        </button>
                        <img
                          src={subImage2URL}
                          height={"195px"}
                          width={"300px"}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </>
        )}
        <div className="bottom-buttons">
          <button
            className="save-button"
            onClick={handleSubmit}
            disabled={loading}
            style={
              loading
                ? { backgroundColor: "gray" }
                : { backgroundColor: "#2daa50" }
            }
          >
            {loading ? "Loading..." : "Save"}
          </button>
          <div className="cancel-button" onClick={ClearData}>
            Cancel
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditBlog;
