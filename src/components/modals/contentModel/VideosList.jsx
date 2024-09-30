import React, { useEffect, useState } from 'react'
import { Form, InputGroup, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { parseUrlFromModel } from '../../../helpers/asset';
import { getContentsAsyncThunk } from '../../../redux/pagesSlices/contentSlice';
import ProvierErrorLoadingScroll from '../../ProvierErrorLoadingScroll';
import VideoCard from './cards/VideoCard'

import { handleModel } from '../../../redux/layoutSlices/modelSlice';



export default function VideosList({ _key }) {
    const modelsArgs = useSelector(
        (state) => state.model?.modelArgs?.contentModel
    );
    const d = useDispatch();

    const [searchTerm, setSearchTerm] = useState('')
    const [userLink, setUserLink] = useState('')

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            getContent(searchTerm)
            // Send Axios request here
        }, 1000)

        return () => clearTimeout(delayDebounceFn)
    }, [searchTerm])

    useEffect(() => {
        if (_key == "video") getContent()
    }, [_key])

    const getContent = () => {
        d(getContentsAsyncThunk({ mimeType: "video", limit: 15, sortBy: "updatedAt:desc", page: 1, ...(searchTerm && { name: searchTerm }) }))
    }
    const Patent = ({ children }) => <div className="row">{children}</div>


    // 
    const args = {
        ...modelsArgs,
        ...(modelsArgs?.type == "video"
            ? { video: userLink }
            : { videos: [userLink] }),
    };
    const closeModel = () => {
        if (modelsArgs?.callBack) modelsArgs.callBack(args[modelsArgs.type]);
        d(handleModel({ model: "contentModel", state: false }));
    };
    const AddLink = () => {
        if (modelsArgs?.type == "video" || modelsArgs?.type == "videos") {
            d(
                handleModel({
                    model: "contentModel",
                    state: true,
                    args,
                })
            );
            closeModel();
        }
    }

    return (
        <>
            <div className='add-utube-vimeo'>
                <Form.Label htmlFor="basic-url">
                    Use video from Youtube or vimeo
                </Form.Label>
                <InputGroup>
                    <Form.Control
                        aria-describedby="basic-add"
                        type="text"
                        placeholder="Enter Link"
                        value={userLink}
                        onChange={(e) => setUserLink(e.target.value)}
                        className=''
                    />
                    <Button style={{maxHeight:38}} variant="danger" className='botn' id="button-add" onClick={AddLink}>
                        Add
                    </Button>
                </InputGroup>
                {/* <small>That doesn't look like a valid youtube or vimeo link.</small> */}
            </div>
            <Form.Control
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search..."
                className="mb-3"
            />

            <div
                // className="row"
                id="getContentsAsyncThunk_videos_parent">
                <ProvierErrorLoadingScroll
                    emtpyMessage="videos will show here!"
                    reducer={"contents"}
                    action={"getContentsAsyncThunk"}
                    dataKey={"videos"}
                    loadingIndicator={"Loadingdata"}
                    Component={VideoCard}
                    Parent={Patent}
                    InfiniteScroll_props={{ scrollableTarget: "getContentsAsyncThunk_videos_parent" }}
                    loadMore={e => d(getContentsAsyncThunk({ ...e, mimeType: "video", sortBy: "updatedAt:desc", ...(searchTerm && { name: searchTerm }) }))}
                    asyncThunk={getContentsAsyncThunk}
                />
            </div>
        </>
    )
}
