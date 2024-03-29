function Mainelement({parm}) {
    return (
        <div className="relative">
            <BlurhashCanvas
                hash={`${parm.blur_hash}`}
                style={BlurhashStyle}
            />
            <ImageListItem className="absolute z-10 min-h-[300px]">
                <section>  
                    <LazyLoadImage 
                        id={parm.id}
                        effect="blur"
                        alt={`${parm.alt_description}`}
                        src={parm.urls[getqulite]}
                        className="w-full h-full"
                        onClick={
                            () => {
                                setimageurlforpanle(parm.urls[getqulite])
                                setshowpanle(true)
                            }
                        }
                        onLoad={() => {
                            setDeleteBlur(!DeleteBlur)
                        }}
                        onError={(e) => {
                            e.target.src = "https://sirv.com/help/articles/customized-error-images/"; // Replace 'path_to_default_image' with the URL or path to your default image
                        }}
                        delayMethod="debounce"
                        delayTime="100"
                    />   
                </section>
                <ImageListItemBar
                    position="bottom"
                    actionIcon={
                        <div className="flex justify-between items-center w-full p-2 ">
                            <Box className="flex items-center justify-between gap-1">
                                <IconButton disabled >
                                    {parm.liked_by_user ? <ThumbUpAltIcon /> : <ThumbUpOffAltIcon />}
                                </IconButton>
                                <p>{parm.likes}</p>
                            </Box>
                            <IconButton
                                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                aria-label={`info about ///// `}
                                onClick={() => {
                                    setshowPhotographer(true)
                                    setphotographerInfo(parm.user)
                                }}
                            >
                                <Avatar alt="Remy Sharp" src={parm.user.profile_image.medium} />
                            </IconButton>
                        </div>
                    }
                />
            </ImageListItem>
        </div>
    )
}