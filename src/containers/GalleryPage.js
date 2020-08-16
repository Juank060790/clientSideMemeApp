import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import MemeList from "../components/MemeList";
import PaginationMeme from "./PaginationMeme";
import { useSelector, useDispatch } from "react-redux";
import { memeActions } from "../redux/actions";
import ClipLoader from "react-spinners/ClipLoader";

const GalleryPage = () => {
  const [pageNum, setPageNum] = useState(1);
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.meme.loading);
  const totalPageNum = useSelector((state) => state.meme.totalPageNum);
  const memes = useSelector((state) => state.meme.memes);
  //   const memes = [
  //     { id: "1" },
  //     { id: "2" },
  //     { id: "3" },
  //     { id: "4" },
  //     { id: "5" },
  //     { id: "6" },
  //   ];

  useEffect(() => {
    dispatch(memeActions.memesRequest(pageNum));
  }, [dispatch, pageNum]);

  const showDetail = () => {};

  return (
    <Container className="p-2">
      <Row>
        {loading ? (
          <ClipLoader color="#f86c6b" size={150} loading={loading} />
        ) : (
          <>
            <PaginationMeme
              pageNum={pageNum}
              setPageNum={setPageNum}
              totalPageNum={totalPageNum}
              loading={loading}
            />
            <MemeList memes={memes} showDetail={showDetail} />
          </>
        )}
      </Row>
    </Container>
  );
};

export default GalleryPage;
