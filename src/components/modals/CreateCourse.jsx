import React from "react";
import { Modal } from "react-bootstrap";
import { handleModel } from "../../redux/layoutSlices/modelSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { createCollectionAsyncThunk } from "../../redux/pagesSlices/collectionSlice";

const CreateCourse = () => {
  const d = useDispatch();
  const state = useSelector((state) => state.model?.modelState?.CreateCourse);

  // const modelArgs = useSelector(
  //   (state) => state.model?.modelArgs?.CreateCourse
  // );
  const handleClose = () => {
    d(handleModel({ model: "CreateCourse", state: false }));
  };
  return (
    <Modal
      className="index-create-model"
      show={state}
      size="xl"
      onHide={handleClose}
      centered
    >
      <Modal.Body>
        <div className="m-header">
          <h3>Create a new course</h3>
          <i className="fa-solid fa-xmark" onClick={handleClose}></i>
        </div>
        <div className="m-body">
          <div className="row">
            <div className="col-lg-4">
              <div className="create-card">
                <div className="content">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="63"
                    height="63"
                    viewBox="0 0 63 63"
                    fill="none"
                  >
                    <path
                      d="M15.75 0V15.75H0V63H47.25V47.25H63V0H15.75Z"
                      fill="#2795F1"
                    />
                    <path d="M0 63H47.25V47.25H63V0L0 63Z" fill="#2189E2" />
                    <path d="M15.75 0H63V47.25H15.75V0Z" fill="#90C9F8" />
                    <path d="M63 47.25H15.75L63 0V47.25Z" fill="#64B4F6" />
                    <path
                      d="M49.875 21H42V13.125C42 12.4288 41.7234 11.7611 41.2312 11.2688C40.7389 10.7766 40.0712 10.5 39.375 10.5C38.6788 10.5 38.0111 10.7766 37.5188 11.2688C37.0266 11.7611 36.75 12.4288 36.75 13.125V21H28.875C28.1788 21 27.5111 21.2766 27.0188 21.7688C26.5266 22.2611 26.25 22.9288 26.25 23.625C26.25 24.3212 26.5266 24.9889 27.0188 25.4812C27.5111 25.9734 28.1788 26.25 28.875 26.25H36.75V34.125C36.75 34.8212 37.0266 35.4889 37.5188 35.9812C38.0111 36.4734 38.6788 36.75 39.375 36.75C40.0712 36.75 40.7389 36.4734 41.2312 35.9812C41.7234 35.4889 42 34.8212 42 34.125V26.25H49.875C50.5712 26.25 51.2389 25.9734 51.7312 25.4812C52.2234 24.9889 52.5 24.3212 52.5 23.625C52.5 22.9288 52.2234 22.2611 51.7312 21.7688C51.2389 21.2766 50.5712 21 49.875 21Z"
                      fill="#E1EFFA"
                    />
                  </svg>
                  <h3>Start Creating Course</h3>
                  <p>
                    Start with the basics as we explore the characteristics and
                    properties of polymer clay
                  </p>
                </div>
                <button
                  onClick={() => {
                    handleClose();
                    // d(
                    //   handleModel({
                    //     model: "RightSidebarBase",
                    //     state: true,
                    //     args: { resource: "collection" },
                    //   })
                    // );
                    const args = {
                      modelName: "createCollection",
                      asyncThunk: createCollectionAsyncThunk,
                    };
                    d(
                      handleModel({
                        model: "CreateAndUpdate",
                        state: true,
                        args,
                      })
                    );
                  }}
                  className="btn btn-outline"
                >
                  Create
                </button>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="create-card">
                <div className="content">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="69"
                    height="64"
                    viewBox="0 0 69 64"
                    fill="none"
                  >
                    <path
                      d="M63.2863 0H4.97757C2.2328 0 0 2.2328 0 4.97757V12.0884C0 14.8332 2.2328 17.066 4.97757 17.066H63.2863C66.0311 17.066 68.2639 14.8332 68.2639 12.0884V4.97757C68.2639 2.2328 66.0311 0 63.2863 0Z"
                      fill="#F9B200"
                    />
                    <path
                      d="M66.1309 25.6016H39.1098C38.544 25.6016 38.0014 25.8263 37.6014 26.2264C37.2013 26.6264 36.9766 27.169 36.9766 27.7348C36.9766 28.3006 37.2013 28.8432 37.6014 29.2432C38.0014 29.6433 38.544 29.8681 39.1098 29.8681H66.1309C66.6967 29.8681 67.2393 29.6433 67.6394 29.2432C68.0394 28.8432 68.2642 28.3006 68.2642 27.7348C68.2642 27.169 68.0394 26.6264 67.6394 26.2264C67.2393 25.8263 66.6967 25.6016 66.1309 25.6016ZM66.1309 34.1345H39.1098C38.544 34.1345 38.0014 34.3593 37.6014 34.7594C37.2013 35.1594 36.9766 35.702 36.9766 36.2678C36.9766 36.8336 37.2013 37.3762 37.6014 37.7762C38.0014 38.1763 38.544 38.401 39.1098 38.401H66.1309C66.6967 38.401 67.2393 38.1763 67.6394 37.7762C68.0394 37.3762 68.2642 36.8336 68.2642 36.2678C68.2642 35.702 68.0394 35.1594 67.6394 34.7594C67.2393 34.3593 66.6967 34.1345 66.1309 34.1345ZM66.1309 42.6675H39.1098C38.544 42.6675 38.0014 42.8923 37.6014 43.2923C37.2013 43.6924 36.9766 44.235 36.9766 44.8008C36.9766 45.3665 37.2013 45.9091 37.6014 46.3092C38.0014 46.7093 38.544 46.934 39.1098 46.934H66.1309C66.6967 46.934 67.2393 46.7093 67.6394 46.3092C68.0394 45.9091 68.2642 45.3665 68.2642 44.8008C68.2642 44.235 68.0394 43.6924 67.6394 43.2923C67.2393 42.8923 66.6967 42.6675 66.1309 42.6675ZM66.1309 51.2005H39.1098C38.544 51.2005 38.0014 51.4253 37.6014 51.8253C37.2013 52.2254 36.9766 52.768 36.9766 53.3338C36.9766 53.8995 37.2013 54.4421 37.6014 54.8422C38.0014 55.2423 38.544 55.467 39.1098 55.467H66.1309C66.6967 55.467 67.2393 55.2423 67.6394 54.8422C68.0394 54.4421 68.2642 53.8995 68.2642 53.3338C68.2642 52.768 68.0394 52.2254 67.6394 51.8253C67.2393 51.4253 66.6967 51.2005 66.1309 51.2005ZM66.1309 59.7335H39.1098C38.544 59.7335 38.0014 59.9582 37.6014 60.3583C37.2013 60.7584 36.9766 61.301 36.9766 61.8667C36.9766 62.4325 37.2013 62.9751 37.6014 63.3752C38.0014 63.7752 38.544 64 39.1098 64H66.1309C66.6967 64 67.2393 63.7752 67.6394 63.3752C68.0394 62.9751 68.2642 62.4325 68.2642 61.8667C68.2642 61.301 68.0394 60.7584 67.6394 60.3583C67.2393 59.9582 66.6967 59.7335 66.1309 59.7335Z"
                      fill="#DEE1E6"
                    />
                    <path
                      d="M31.2876 29.8681V59.7335C31.2876 60.3877 31.1454 61.0134 30.861 61.5823C30.4059 62.5209 29.6379 63.2605 28.6708 63.6587C28.1516 63.8888 27.5891 64.0052 27.0211 64H4.26649C1.9057 64 0 62.0943 0 59.7335V29.8681C0 27.5073 1.9057 25.6016 4.26649 25.6016H27.0211C29.3819 25.6016 31.2876 27.5073 31.2876 29.8681Z"
                      fill="#D2E6FF"
                    />
                    <path
                      d="M31.2935 47.8443V59.7336C31.2935 62.0944 29.3878 64.0001 27.027 64.0001H4.30078L21.6938 39.1492C21.8191 38.9704 21.9838 38.8229 22.1752 38.718C22.3667 38.6131 22.5797 38.5536 22.7978 38.5443C23.0158 38.5349 23.2332 38.5759 23.4329 38.664C23.6326 38.7522 23.8093 38.8851 23.9494 39.0525L31.2935 47.8443Z"
                      fill="#689F38"
                    />
                    <path
                      d="M30.861 61.5767C30.4059 62.5153 29.6379 63.2548 28.6708 63.653C28.1516 63.8832 27.5891 63.9995 27.0211 63.9944H4.26649C1.9057 63.9944 0 62.0886 0 59.7279V50.5976L7.93567 42.6619C8.4761 42.1215 9.21562 41.8086 9.95515 41.8086C10.3315 41.8102 10.7037 41.8864 11.0504 42.0329C11.3971 42.1793 11.7112 42.3931 11.9746 42.6619L30.861 61.5767Z"
                      fill="#8BC34A"
                    />
                  </svg>
                  <h3>Use Templates</h3>
                  <p>
                    Start with the basics as we explore the characteristics and
                    properties of polymer clay
                  </p>
                </div>
                <button className="btn btn-outline">Create</button>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="create-card">
                <div className="content">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="64"
                    height="64"
                    viewBox="0 0 64 64"
                    fill="none"
                  >
                    <path
                      d="M12.1473 17.6562H5.51562V19.8631H12.1473V17.6562Z"
                      fill="#34314C"
                    />
                    <path
                      d="M11.2182 30.2843L9.33907 33.1036H5.51562V35.3105H9.92942C10.111 35.3105 10.2899 35.2657 10.45 35.18C10.6102 35.0944 10.7467 34.9705 10.8475 34.8194L12.7267 32.0001H18.757V29.7932H12.1363C11.9547 29.7932 11.7759 29.838 11.6157 29.9237C11.4556 30.0093 11.319 30.1332 11.2182 30.2843ZM10.8475 2.69807C10.7467 2.54699 10.6102 2.42312 10.45 2.33746C10.2899 2.25181 10.111 2.207 9.92942 2.20703H5.51562V4.41393H9.33907L11.2149 7.23324C11.316 7.38479 11.4531 7.50894 11.6139 7.59462C11.7746 7.6803 11.9541 7.72485 12.1363 7.72427H18.757V5.51738H12.7267L10.8475 2.69807Z"
                      fill="#34314C"
                    />
                    <path
                      d="M58.4794 17.6562H51.8477V19.8631H58.4794V17.6562Z"
                      fill="#34314C"
                    />
                    <path
                      d="M52.7809 30.2843C52.6801 30.1332 52.5436 30.0093 52.3835 29.9237C52.2233 29.838 52.0445 29.7932 51.8629 29.7932H45.2422V32.0001H51.2725L53.1484 34.8194C53.2495 34.971 53.3866 35.0951 53.5473 35.1808C53.7081 35.2665 53.8876 35.3111 54.0698 35.3105H58.4836V33.1036H54.6601L52.7809 30.2843ZM54.0698 2.20703C53.8882 2.207 53.7093 2.25181 53.5492 2.33746C53.389 2.42312 53.2525 2.54699 53.1517 2.69807L51.2725 5.51738H45.2422V7.72427H51.8629C52.0445 7.7243 52.2233 7.6795 52.3835 7.59384C52.5436 7.50818 52.6801 7.38432 52.7809 7.23324L54.6601 4.41393H58.4836V2.20703H54.0698Z"
                      fill="#34314C"
                    />
                    <path
                      d="M11.0348 44.1406H4.41406V64.0027H11.0348V44.1406Z"
                      fill="#3780EA"
                    />
                    <path
                      d="M35.311 47.4484H41.9317L50.1193 40.0774C50.8192 39.4449 51.7385 39.1111 52.6811 39.1472C53.6237 39.1832 54.5149 39.5863 55.1644 40.2704C55.8139 40.9545 56.1703 41.8653 56.1575 42.8085C56.1447 43.7517 55.7637 44.6526 55.0958 45.3187L40.8283 57.3794L29.7938 60.6898H11.0352V47.4484H16.1883C17.143 47.4465 18.0716 47.1369 18.8365 46.5656L20.8889 45.0208C21.6539 44.4495 22.5825 44.1399 23.5372 44.1381H31.8131C32.684 44.1227 33.5285 44.4371 34.1772 45.0183C34.8259 45.5995 35.231 46.4045 35.311 47.2718V47.4484Z"
                      fill="#F0D0B4"
                    />
                    <path
                      d="M56.2214 39.8179C55.8199 39.316 55.3201 38.9014 54.7526 38.5995C54.1851 38.2977 53.562 38.115 52.9213 38.0626C52.2807 38.0102 51.6362 38.0892 51.0272 38.2949C50.4182 38.5005 49.8577 38.8284 49.38 39.2585L41.508 46.3437H36.271C35.9953 45.3786 35.4091 44.5312 34.6032 43.9328C33.7974 43.3344 32.8167 43.0183 31.8131 43.0334H23.5372C22.3438 43.0352 21.1827 43.4222 20.2269 44.1368L18.1656 45.6816C17.5921 46.1105 16.8955 46.3427 16.1794 46.3437H11.0352V48.5506H16.1849C17.3784 48.5488 18.5394 48.1618 19.4953 47.4471L21.5565 45.9023C22.13 45.4735 22.8266 45.2413 23.5427 45.2403H31.8186C32.4062 45.2241 32.9783 45.4299 33.421 45.8165C33.8637 46.2032 34.1445 46.7425 34.2076 47.3269C34.2239 47.6266 34.179 47.9266 34.0754 48.2084C33.9718 48.4902 33.8119 48.7479 33.6053 48.9657C33.3987 49.1836 33.1499 49.357 32.874 49.4753C32.598 49.5937 32.3009 49.6545 32.0007 49.654H23.1731V51.8609H32.0007C32.5993 51.8597 33.1914 51.7373 33.7414 51.501C34.2913 51.2647 34.7878 50.9194 35.2007 50.486C35.7116 49.9416 36.0744 49.2752 36.2545 48.5506H41.9317C42.2044 48.5505 42.4673 48.4495 42.6699 48.267L50.8575 40.8982C51.3385 40.464 51.9686 40.2324 52.6163 40.2516C53.264 40.2709 53.8793 40.5395 54.3337 41.0015C54.7881 41.4634 55.0465 42.083 55.0551 42.7309C55.0637 43.3788 54.8217 44.0051 54.3797 44.4789L40.292 56.3851L29.6327 59.5851H11.0352V61.792H29.7938C29.901 61.7916 30.0076 61.776 30.1105 61.7456L41.1449 58.4353C41.2903 58.3919 41.4252 58.319 41.5411 58.2212L55.8727 46.1009C56.6947 45.2806 57.1849 44.1857 57.2493 43.0261C57.3136 41.8666 56.9476 40.7241 56.2214 39.8179Z"
                      fill="#DFB28B"
                    />
                    <path
                      d="M3.31034 37.5191C5.1386 37.5191 6.62069 36.037 6.62069 34.2088C6.62069 32.3805 5.1386 30.8984 3.31034 30.8984C1.48209 30.8984 0 32.3805 0 34.2088C0 36.037 1.48209 37.5191 3.31034 37.5191Z"
                      fill="#F6CC4F"
                    />
                    <path
                      d="M3.31034 22.0699C5.1386 22.0699 6.62069 20.5878 6.62069 18.7596C6.62069 16.9313 5.1386 15.4492 3.31034 15.4492C1.48209 15.4492 0 16.9313 0 18.7596C0 20.5878 1.48209 22.0699 3.31034 22.0699Z"
                      fill="#F6CC4F"
                    />
                    <path
                      d="M3.31034 6.62069C5.1386 6.62069 6.62069 5.1386 6.62069 3.31034C6.62069 1.48209 5.1386 0 3.31034 0C1.48209 0 0 1.48209 0 3.31034C0 5.1386 1.48209 6.62069 3.31034 6.62069Z"
                      fill="#F6CC4F"
                    />
                    <path
                      d="M18.1083 6.61836C18.6123 5.45164 19.5036 4.4947 20.6317 3.90926C21.7598 3.32383 23.0553 3.1458 24.2995 3.40527C25.5437 3.66475 26.6601 4.3458 27.4601 5.33334C28.2601 6.32087 28.6947 7.55433 28.6903 8.82525V28.6873C28.6947 29.9582 28.2601 31.1917 27.4601 32.1792C26.6601 33.1668 25.5437 33.8478 24.2995 34.1073C23.0553 34.3668 21.7598 34.1887 20.6317 33.6033C19.5036 33.0179 18.6123 32.0609 18.1083 30.8942C17.8104 30.1965 17.6565 29.4459 17.6558 28.6873C17.6526 28.2674 17.7008 27.8486 17.7993 27.4404C17.3911 27.539 16.9723 27.5871 16.5524 27.5839C15.0891 27.5839 13.6858 27.0026 12.6511 25.9679C11.6164 24.9332 11.0352 23.5299 11.0352 22.0666C11.0399 21.055 11.321 20.064 11.848 19.2005C12.375 18.3371 13.128 17.634 14.0255 17.1673C13.5116 16.3148 13.2407 15.3379 13.2421 14.3425C13.2423 13.0691 13.6831 11.8349 14.4896 10.8494C15.2961 9.86391 16.4187 9.18774 17.6669 8.9356C17.6578 8.89957 17.654 8.86238 17.6558 8.82525C17.6565 8.06667 17.8104 7.31603 18.1083 6.61836ZM49.9758 17.1673C50.8734 17.634 51.6263 18.3371 52.1533 19.2005C52.6804 20.064 52.9614 21.055 52.9662 22.0666C52.9662 23.5299 52.3849 24.9332 51.3502 25.9679C50.3155 27.0026 48.9122 27.5839 47.4489 27.5839C47.029 27.5871 46.6103 27.539 46.2021 27.4404C46.3006 27.8486 46.3488 28.2674 46.3455 28.6873C46.3448 29.4459 46.1909 30.1965 45.8931 30.8942C45.3891 32.0609 44.4977 33.0179 43.3697 33.6033C42.2416 34.1887 40.946 34.3668 39.7018 34.1073C38.4577 33.8478 37.3412 33.1668 36.5412 32.1792C35.7412 31.1917 35.3067 29.9582 35.311 28.6873V8.82525C35.3067 7.55433 35.7412 6.32087 36.5412 5.33334C37.3412 4.3458 38.4577 3.66475 39.7018 3.40527C40.946 3.1458 42.2416 3.32383 43.3697 3.90926C44.4977 4.4947 45.3891 5.45164 45.8931 6.61836C46.1909 7.31603 46.3448 8.06667 46.3455 8.82525C46.3473 8.86238 46.3436 8.89957 46.3345 8.9356C47.5827 9.18774 48.7053 9.86391 49.5118 10.8494C50.3183 11.8349 50.759 13.0691 50.7593 14.3425C50.7606 15.3379 50.4897 16.3148 49.9758 17.1673Z"
                      fill="#EC455A"
                    />
                    <path
                      d="M60.6893 37.5191C62.5175 37.5191 63.9996 36.037 63.9996 34.2088C63.9996 32.3805 62.5175 30.8984 60.6893 30.8984C58.861 30.8984 57.3789 32.3805 57.3789 34.2088C57.3789 36.037 58.861 37.5191 60.6893 37.5191Z"
                      fill="#F6CC4F"
                    />
                    <path
                      d="M60.6893 22.0699C62.5175 22.0699 63.9996 20.5878 63.9996 18.7596C63.9996 16.9313 62.5175 15.4492 60.6893 15.4492C58.861 15.4492 57.3789 16.9313 57.3789 18.7596C57.3789 20.5878 58.861 22.0699 60.6893 22.0699Z"
                      fill="#F6CC4F"
                    />
                    <path
                      d="M60.6893 6.62069C62.5175 6.62069 63.9996 5.1386 63.9996 3.31034C63.9996 1.48209 62.5175 0 60.6893 0C58.861 0 57.3789 1.48209 57.3789 3.31034C57.3789 5.1386 58.861 6.62069 60.6893 6.62069Z"
                      fill="#F6CC4F"
                    />
                    <path
                      d="M23.1717 2.20703C21.5411 2.20913 19.9685 2.81219 18.7546 3.90089C17.5407 4.98959 16.7707 6.48753 16.5918 8.10827C15.7473 8.39467 14.97 8.8502 14.3074 9.44705C13.6448 10.0439 13.1108 10.7695 12.738 11.5797C12.3652 12.3898 12.1614 13.2674 12.1391 14.1589C12.1169 15.0504 12.2765 15.9371 12.6084 16.7648C11.4893 17.5928 10.6602 18.7529 10.2393 20.0798C9.81826 21.4066 9.82686 22.8325 10.2638 24.1542C10.7008 25.4759 11.5438 26.6259 12.6728 27.4403C13.8017 28.2547 15.1589 28.692 16.551 28.6898C16.551 30.4457 17.2485 32.1297 18.4901 33.3713C19.7318 34.6129 21.4158 35.3105 23.1717 35.3105C24.9276 35.3105 26.6116 34.6129 27.8532 33.3713C29.0948 32.1297 29.7924 30.4457 29.7924 28.6898V8.82772C29.7906 7.07234 29.0925 5.38936 27.8513 4.14812C26.61 2.90688 24.9271 2.20878 23.1717 2.20703ZM27.5855 28.6898C27.5855 29.5628 27.3266 30.4161 26.8416 31.142C26.3566 31.8678 25.6673 32.4335 24.8608 32.7676C24.0542 33.1017 23.1668 33.1891 22.3106 33.0188C21.4544 32.8485 20.6679 32.4281 20.0507 31.8108C19.4334 31.1935 19.013 30.4071 18.8427 29.5509C18.6724 28.6947 18.7598 27.8072 19.0939 27.0007C19.4279 26.1942 19.9937 25.5048 20.7195 25.0199C21.4453 24.5349 22.2987 24.276 23.1717 24.276V22.0691C21.8121 22.0707 20.486 22.4909 19.3735 23.2725C18.2611 24.054 17.4162 25.1592 16.9537 26.4377C16.8169 26.4498 16.6977 26.4829 16.551 26.4829C15.5618 26.481 14.6018 26.1468 13.8253 25.534C13.0487 24.9212 12.5005 24.0653 12.2686 23.1036C12.0367 22.142 12.1347 21.1303 12.5467 20.2309C12.9586 19.3315 13.6608 18.5966 14.5405 18.1441C15.1611 17.8205 15.8511 17.6527 16.551 17.6553V15.4484C15.8844 15.452 15.2221 15.5565 14.5868 15.7585C14.4278 15.3041 14.3457 14.8264 14.3441 14.345C14.3474 13.5339 14.5742 12.7394 14.9996 12.0487C15.4249 11.3581 16.0323 10.798 16.7551 10.4299C17.1132 11.8615 17.9388 13.1325 19.1011 14.0416C20.2635 14.9507 21.696 15.4458 23.1717 15.4484V13.2415C22.2987 13.2415 21.4453 12.9826 20.7195 12.4977C19.9937 12.0127 19.4279 11.3233 19.0939 10.5168C18.7598 9.71029 18.6724 8.82282 18.8427 7.96663C19.013 7.11044 19.4334 6.32398 20.0507 5.7067C20.6679 5.08942 21.4544 4.66904 22.3106 4.49874C23.1668 4.32843 24.0542 4.41584 24.8608 4.74991C25.6673 5.08398 26.3566 5.6497 26.8416 6.37555C27.3266 7.10139 27.5855 7.95476 27.5855 8.82772V28.6898ZM51.3902 16.7626C51.722 15.935 51.8816 15.0485 51.8593 14.1571C51.837 13.2658 51.6332 12.3884 51.2604 11.5784C50.8876 10.7685 50.3536 10.043 49.691 9.44637C49.0284 8.84973 48.2512 8.39443 47.4067 8.10827C47.2192 6.42767 46.3958 4.8825 45.1053 3.78971C43.8148 2.69692 42.1551 2.13935 40.4665 2.23138C38.778 2.32341 37.1887 3.05805 36.0246 4.28462C34.8605 5.51118 34.2099 7.13669 34.2062 8.82772V28.6898C34.2062 30.4457 34.9037 32.1297 36.1453 33.3713C37.3869 34.6129 39.0709 35.3105 40.8268 35.3105C42.5828 35.3105 44.2668 34.6129 45.5084 33.3713C46.75 32.1297 47.4475 30.4457 47.4475 28.6898C48.8395 28.6912 50.1964 28.2534 51.325 27.4387C52.4536 26.624 53.2963 25.4739 53.7332 24.1523C54.17 22.8307 54.1788 21.405 53.7581 20.0781C53.3374 18.7513 52.5087 17.591 51.3902 16.7626ZM47.4475 26.4829C47.3008 26.4829 47.1816 26.4498 47.0448 26.4377C46.5823 25.1592 45.7374 24.054 44.625 23.2725C43.5125 22.4909 42.1864 22.0707 40.8268 22.0691V24.276C41.6998 24.276 42.5532 24.5349 43.279 25.0199C44.0049 25.5048 44.5706 26.1942 44.9047 27.0007C45.2387 27.8072 45.3261 28.6947 45.1558 29.5509C44.9855 30.4071 44.5652 31.1935 43.9479 31.8108C43.3306 32.4281 42.5441 32.8485 41.6879 33.0188C40.8317 33.1891 39.9443 33.1017 39.1378 32.7676C38.3312 32.4335 37.6419 31.8678 37.1569 31.142C36.6719 30.4161 36.4131 29.5628 36.4131 28.6898V8.82772C36.4131 7.95476 36.6719 7.10139 37.1569 6.37555C37.6419 5.6497 38.3312 5.08398 39.1378 4.74991C39.9443 4.41584 40.8317 4.32843 41.6879 4.49874C42.5441 4.66904 43.3306 5.08942 43.9479 5.7067C44.5652 6.32398 44.9855 7.11044 45.1558 7.96663C45.3261 8.82282 45.2387 9.71029 44.9047 10.5168C44.5706 11.3233 44.0049 12.0127 43.279 12.4977C42.5532 12.9826 41.6998 13.2415 40.8268 13.2415V15.4484C42.3025 15.4458 43.735 14.9507 44.8974 14.0416C46.0597 13.1325 46.8854 11.8615 47.2434 10.4299C47.9662 10.798 48.5736 11.3581 48.999 12.0487C49.4243 12.7394 49.6511 13.5339 49.6544 14.345C49.653 14.8264 49.5709 15.3042 49.4117 15.7585C48.7765 15.5562 48.1142 15.4517 47.4475 15.4484V17.6553C48.1516 17.6533 48.8454 17.8229 49.4691 18.1497C50.3466 18.6041 51.0463 19.3399 51.456 20.2392C51.8657 21.1385 51.9618 22.1493 51.7288 23.1096C51.4958 24.07 50.9473 24.9244 50.1711 25.5361C49.3948 26.1477 48.4358 26.4811 47.4475 26.4829Z"
                      fill="#9E2849"
                    />
                  </svg>
                  <h3>Use AI</h3>
                  <p>Coming Soon</p>
                </div>
                <button
                  className="btn btn-outline"
                  onClick={() => {
                    handleClose();
                    d(
                      handleModel({
                        model: "RightSidebarBase",
                        state: true,
                        args: { resource: "aicollection" },
                      })
                    );
                  }}
                >
                  Create
                </button>
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default CreateCourse;
