'use client';

import React from 'react';
import {
  downloadLinux86Deb,
  downloadLinux86Rpm,
  downloadMacIntel,
  downloadMacUniversal,
  downloadWindows,
} from '@/lib/hooks/use-download';
import { useClient } from '@/lib/hooks/use-client';

function DownloadAcross() {
  const { isMobile } = useClient();
  const downloadBtns = [
    {
      title: 'macOS',
      icon: (
        <svg
          className={'text-black dark:text-white'}
          xmlns='http://www.w3.org/2000/svg'
          width='47'
          height='56'
          viewBox='0 0 47 56'
          fill='none'
        >
          <path
            d='M45.1763 19.0923C44.8438 19.3443 38.9739 22.5759 38.9739 29.7614C38.9739 38.0726 46.4431 41.0129 46.6667 41.0857C46.6323 41.2649 45.4801 45.1125 42.7286 49.0329C40.2752 52.4828 37.7128 55.9272 33.8148 55.9272C29.9169 55.9272 28.9137 53.715 24.4139 53.715C20.0287 53.715 18.4695 56 14.904 56C11.3385 56 8.85067 52.8077 5.99026 48.8873C2.67699 44.2836 0 37.1317 0 30.3438C0 19.4563 7.24563 13.6822 14.3766 13.6822C18.1657 13.6822 21.3242 16.1128 23.7031 16.1128C25.9673 16.1128 29.4984 13.5366 33.8091 13.5366C35.4428 13.5366 41.3127 13.6822 45.1763 19.0923ZM31.7627 8.92729C33.5454 6.86069 34.8065 3.9932 34.8065 1.12571C34.8065 0.728073 34.7721 0.324832 34.6976 0C31.7971 0.106411 28.3462 1.88739 26.2654 4.24522C24.6317 6.05981 23.1069 8.92729 23.1069 11.834C23.1069 12.2708 23.1814 12.7077 23.2158 12.8477C23.3993 12.8813 23.6973 12.9205 23.9954 12.9205C26.5979 12.9205 29.871 11.2179 31.7627 8.92729Z'
            fill='currentColor'
          />
        </svg>
      ),
      btns: [
        <button disabled={isMobile} key={1} onClick={() => downloadMacIntel(true)} className={'download-btn'}>
          Download Intel
        </button>,
        <button disabled={isMobile} key={2} onClick={() => downloadMacUniversal(true)} className={'download-btn'}>
          Download Universal
        </button>,
      ],
    },
    {
      title: 'Windows',
      icon: (
        <svg
          className={'text-black dark:text-white'}
          xmlns='http://www.w3.org/2000/svg'
          width='57'
          height='56'
          viewBox='0 0 57 56'
          fill='none'
        >
          <path
            d='M5.75195 5.41931H27.1607V26.8188H5.75195V5.41931ZM29.5045 5.41931H50.9132V26.8188H29.5045V5.41931ZM5.75195 29.1718H27.1607V50.5806H5.75195V29.1718ZM29.5045 29.1718H50.9132V50.5806H29.5045'
            fill='currentColor'
          />
        </svg>
      ),
      btns: [
        <button disabled={isMobile} key={1} onClick={() => downloadWindows(true)} className={'download-btn'}>
          Download Intel
        </button>,
      ],
    },
    {
      title: 'Linux',
      icon: (
        <svg
          className={'text-black dark:text-white'}
          xmlns='http://www.w3.org/2000/svg'
          width='48'
          height='56'
          viewBox='0 0 48 56'
          fill='none'
        >
          <path
            d='M23.3996 14.2295C23.3996 14.409 23.2229 14.409 23.2229 14.409H23.0462C22.8695 14.409 22.8695 14.2295 22.6928 14.0501C22.6928 14.0501 22.5161 13.8706 22.5161 13.6911C22.5161 13.5116 22.5161 13.5116 22.6928 13.5116L23.0462 13.6911C23.2229 13.8706 23.3996 14.0501 23.3996 14.2295ZM20.2191 12.4347C20.2191 11.5372 19.8658 10.9988 19.3357 10.9988C19.3357 10.9988 19.3357 11.1783 19.159 11.1783V11.5372H19.6891C19.6891 11.8962 19.8658 12.0757 19.8658 12.4347H20.2191ZM26.4034 11.5372C26.7567 11.5372 26.9334 11.8962 27.1101 12.4347H27.4635C27.2868 12.2552 27.2868 12.0757 27.2868 11.8962C27.2868 11.7167 27.2868 11.5372 27.1101 11.3578C26.9334 11.1783 26.7567 10.9988 26.58 10.9988C26.58 10.9988 26.4034 11.1783 26.2267 11.1783C26.2267 11.3578 26.4034 11.3578 26.4034 11.5372ZM21.1026 14.409C20.9259 14.409 20.9259 14.409 20.9259 14.2295C20.9259 14.0501 20.9259 13.8706 21.1026 13.6911C21.456 13.6911 21.6327 13.5116 21.6327 13.5116C21.8094 13.5116 21.8094 13.6911 21.8094 13.6911C21.8094 13.8706 21.6327 14.0501 21.2793 14.409H21.1026ZM19.159 14.2295C18.4522 13.8706 18.2755 13.3321 18.2755 12.4347C18.2755 11.8962 18.2755 11.5372 18.6289 11.1783C18.8056 10.8193 19.159 10.6398 19.5124 10.6398C19.8658 10.6398 20.0425 10.8193 20.3958 11.1783C20.5725 11.7167 20.7492 12.2552 20.7492 12.7937V13.1526H20.9259V12.9731C21.1026 12.9731 21.1026 12.6142 21.1026 11.8962C21.1026 11.3578 21.1026 10.8193 20.7492 10.2808C20.3958 9.74237 20.0425 9.3834 19.3357 9.3834C18.8056 9.3834 18.2755 9.74237 18.0988 10.2808C17.7455 10.9988 17.6748 11.5372 17.6748 12.4347C17.6748 13.1526 17.9222 13.8706 18.6289 14.5885C18.8056 14.409 18.9823 14.409 19.159 14.2295ZM41.2455 39.5372C41.4221 39.5372 41.4221 39.4654 41.4221 39.3039C41.4221 38.909 41.2455 38.4424 40.7154 37.9219C40.1853 37.3834 39.3018 37.0424 38.2417 36.8988C38.065 36.8808 37.8883 36.8808 37.8883 36.8808C37.7116 36.8449 37.7116 36.8449 37.5349 36.8449C37.3582 36.827 37.0049 36.7911 36.8282 36.7552C37.3582 35.086 37.5349 33.6142 37.5349 32.3219C37.5349 30.527 37.1815 29.2706 36.4748 28.1937C35.768 27.1167 35.0612 26.5783 34.1778 26.3988C34.0011 26.5783 34.0011 26.5783 34.0011 26.7578C34.8846 27.1167 35.768 27.8347 36.2981 28.9116C36.8282 30.168 37.0049 31.2449 37.0049 32.5013C37.0049 33.5065 36.8282 34.9962 36.1214 36.8988C35.4146 37.186 34.7079 37.8501 34.1778 38.8911C34.1778 39.0526 34.1778 39.1424 34.3545 39.1424C34.3545 39.1424 34.5312 38.9808 34.7079 38.6757C35.0612 38.3706 35.2379 38.0654 35.5913 37.7603C36.1214 37.4552 36.4748 37.2937 37.0049 37.2937C37.8883 37.2937 38.7718 37.4193 39.3018 37.6706C40.0086 37.9039 40.362 38.1552 40.5387 38.4424C40.7154 38.7116 40.8921 38.9629 41.0688 39.1962C41.0688 39.4296 41.2455 39.5372 41.2455 39.5372ZM24.9898 13.5116C24.8131 13.3321 24.8131 12.9731 24.8131 12.6142C24.8131 11.8962 24.8131 11.5372 25.1665 10.9988C25.5199 10.6398 25.8733 10.4603 26.2267 10.4603C26.7567 10.4603 27.1101 10.8193 27.4635 11.1783C27.6402 11.7167 27.8169 12.0757 27.8169 12.6142C27.8169 13.5116 27.4635 14.0501 26.7567 14.2295C26.7567 14.2295 26.9334 14.409 27.1101 14.409C27.4635 14.409 27.6402 14.5885 27.9936 14.768C28.1703 13.6911 28.347 12.9731 28.347 12.0757C28.347 10.9988 28.1703 10.2808 27.8169 9.74237C27.2868 9.20391 26.7567 9.02442 26.05 9.02442C25.5199 9.02442 24.9898 9.20391 24.4597 9.56288C24.1064 10.1013 23.9297 10.4603 23.9297 10.9988C23.9297 11.8962 24.1064 12.6142 24.4597 13.3321C24.6364 13.3321 24.8131 13.5116 24.9898 13.5116ZM27.1101 16.3834C24.8131 17.9988 23.0462 18.7167 21.6327 18.7167C20.3958 18.7167 19.159 18.1783 18.0988 17.2808C18.2755 17.6398 18.4522 17.9988 18.6289 18.1783L19.6891 19.2552C20.3958 19.9731 21.2793 20.3321 22.1628 20.3321C23.3996 20.3321 24.8131 19.6142 26.58 18.3578L28.1703 17.2808C28.5237 16.9219 28.877 16.5629 28.877 16.0244C28.877 15.8449 28.877 15.6654 28.7003 15.6654C28.5237 15.3065 27.6402 14.768 25.8733 14.2295C24.2831 13.5116 23.0462 13.1526 22.3394 13.1526C21.8094 13.1526 20.9259 13.5116 19.6891 14.2295C18.6289 14.9475 17.9222 15.6654 17.9222 16.3834C17.9222 16.3834 18.0988 16.5629 18.2755 16.9219C19.3357 17.8193 20.3958 18.3578 21.456 18.3578C22.8695 18.3578 24.6364 17.6398 26.9334 15.8449V16.2039C27.1101 16.2039 27.1101 16.3834 27.1101 16.3834ZM31.174 52.6398C31.8808 53.9895 33.1176 54.668 34.5312 54.668C34.8846 54.668 35.2379 54.6142 35.5913 54.5065C35.9447 54.4347 36.2981 54.309 36.4748 54.1654C36.6515 54.0398 36.8282 53.9142 37.0049 53.7706C37.3582 53.6449 37.3582 53.5552 37.5349 53.4654L40.5387 50.827C41.2455 50.2544 41.9522 49.7536 42.8357 49.3193C43.5424 48.8885 44.2492 48.6013 44.6026 48.4398C45.1327 48.2962 45.4861 48.0808 45.8394 47.7936C46.0161 47.5244 46.1928 47.1834 46.1928 46.7526C46.1928 46.2321 45.8394 45.8372 45.4861 45.5501C45.1327 45.2629 44.7793 45.0654 44.4259 44.9398C44.0725 44.8142 43.7191 44.527 43.1891 44.0424C42.8357 43.5757 42.4823 42.9295 42.3056 42.086L42.1289 41.0449C41.9522 40.5603 41.9522 40.2013 41.7755 40.0039C41.7755 39.9501 41.7755 39.9321 41.5988 39.9321C41.4221 39.9321 41.0688 40.0937 40.8921 40.3988C40.5387 40.7039 40.1853 41.0449 39.8319 41.4039C39.6552 41.7629 39.1252 42.086 38.7718 42.3911C38.2417 42.6962 37.7116 42.8578 37.3582 42.8578C35.9447 42.8578 35.2379 42.4629 34.7079 41.6911C34.3545 41.1167 34.1778 40.4526 34.0011 39.6988C33.6477 39.3937 33.471 39.2321 33.1176 39.2321C32.2342 39.2321 31.8808 40.1654 31.8808 42.0501V47.6321C31.8808 47.7936 31.7041 48.1526 31.7041 48.709C31.5274 49.2654 31.5274 49.8972 31.5274 50.6116L31.174 52.6039V52.6344M5.55373 51.6849C7.19696 51.929 9.08756 52.4513 11.2255 53.2483C13.3635 54.038 14.671 54.4508 15.1481 54.4508C16.3849 54.4508 17.4097 53.8944 18.2579 52.8193C18.4346 52.4711 18.4346 52.0619 18.4346 51.5916C18.4346 49.8954 17.4274 47.7506 15.4131 45.148L14.2116 43.5147C13.9643 43.1736 13.6639 42.6531 13.2752 41.9531C12.9041 41.2531 12.5684 40.7147 12.3034 40.3378C12.0737 39.9249 11.7026 39.5121 11.2255 39.0993C10.7661 38.6865 10.2361 38.4172 9.65298 38.2737C8.91087 38.4172 8.39847 38.6685 8.1511 39.0095C7.90373 39.3506 7.76238 39.7275 7.72704 40.1224C7.67403 40.4993 7.56802 40.7506 7.39132 40.8762C7.21463 40.9839 6.91426 41.0737 6.50787 41.1634C6.41952 41.1634 6.2605 41.1634 6.0308 41.1813H5.55373C4.61726 41.1813 3.98117 41.289 3.64546 41.4685C3.20373 41.989 2.97403 42.5813 2.97403 43.2095C2.97403 43.4967 3.04471 43.9813 3.18606 44.6634C3.32741 45.3275 3.39809 45.866 3.39809 46.2429C3.39809 46.9788 3.18606 47.7147 2.74433 48.4506C2.3026 49.2224 2.0729 49.7967 2.0729 50.206C2.2496 50.9024 3.41576 51.3924 5.55373 51.6795M11.4376 35.3642C11.4376 34.1257 11.7556 32.7616 12.4094 31.1462C13.0455 29.5308 13.6816 28.4539 14.3 27.736C14.2646 27.5565 14.1763 27.5565 14.0349 27.5565L13.8582 27.377C13.3458 27.9154 12.7274 29.1719 11.9853 30.9667C11.2432 32.5821 10.8545 34.0719 10.8545 35.1667C10.8545 35.9744 11.0488 36.6744 11.4022 37.2847C11.7909 37.877 12.7274 38.7385 14.2116 39.8334L16.0846 41.0719C18.0812 42.8308 19.1413 44.0513 19.1413 44.7693C19.1413 45.1462 18.9646 45.5231 18.4346 45.936C18.0812 46.3667 17.6041 46.5821 17.1977 46.5821C17.1624 46.5821 17.1447 46.618 17.1447 46.7078C17.1447 46.7257 17.3214 47.0847 17.6925 47.7847C18.4346 48.8078 20.0248 49.3103 22.1451 49.3103C26.0323 49.3103 29.0361 47.6949 31.3331 44.4642C31.3331 43.5667 31.3331 43.0103 31.1564 42.777V42.1129C31.1564 40.9462 31.3331 40.0667 31.6864 39.4924C32.0398 38.918 32.3932 38.6488 32.9233 38.6488C33.2767 38.6488 33.63 38.7744 33.9834 39.0437C34.1601 37.6616 34.1601 36.459 34.1601 35.3821C34.1601 33.7488 34.1601 32.4026 33.8067 31.1462C33.63 30.0693 33.2767 29.1719 32.9233 28.4539L31.8631 26.8385C31.5097 26.3001 31.3331 25.7616 30.9797 25.2231C30.803 24.5052 30.6263 23.9667 30.6263 23.0693C30.0962 22.1719 29.7428 21.2744 29.2127 20.377C28.8594 19.4795 28.506 18.5821 28.1526 17.8642L26.5624 19.1206C24.7955 20.377 23.3819 20.9154 22.1451 20.9154C21.0849 20.9154 20.2015 20.736 19.6714 20.018L18.6112 19.1206C18.6112 19.659 18.4346 20.377 18.0812 21.0949L16.968 23.2488C16.4733 24.5052 16.2082 25.2231 16.1552 25.7616C16.0846 26.1206 16.0315 26.4795 15.9962 26.4795L14.671 29.1719C13.2398 31.8642 12.5154 34.359 12.5154 36.4231C12.5154 36.836 12.5507 37.2667 12.6214 37.6975C11.8263 37.1411 11.4376 36.3693 11.4376 35.3642ZM24.0887 52.3436C21.7917 52.3436 20.0248 52.6595 18.7879 53.286V53.2321C17.9045 54.309 16.915 54.8654 15.5368 54.8654C14.671 54.8654 13.3105 54.5244 11.4729 53.8424C9.61764 53.1962 7.97441 52.7008 6.5432 52.3742C6.40185 52.3329 6.08381 52.2719 5.5714 52.1893C5.07666 52.1085 4.61726 52.026 4.21087 51.9434C3.83982 51.8626 3.41576 51.7406 2.95636 51.5754C2.51463 51.4336 2.16125 51.2488 1.89621 51.0244C1.65238 50.7983 1.53223 50.5434 1.53223 50.258C1.53223 49.9708 1.5923 49.6639 1.71245 49.3372C1.82553 49.1398 1.94922 48.9424 2.0729 48.7629C2.19659 48.5654 2.3026 48.386 2.37328 48.2065C2.47929 48.0449 2.54997 47.8834 2.62065 47.7039C2.69132 47.5424 2.762 47.3808 2.79734 47.1834C2.83268 47.0039 2.86802 46.8244 2.86802 46.6449C2.86802 46.4654 2.79734 45.927 2.65599 44.9757C2.51463 44.0424 2.44396 43.4501 2.44396 43.1988C2.44396 42.409 2.62065 41.7808 3.00937 41.3321C3.39809 40.8834 3.76914 40.6501 4.15787 40.6501H6.18982C6.34884 40.6501 6.59621 40.5603 6.96726 40.3449C7.09095 40.0578 7.19696 39.8244 7.26764 39.609C7.35599 39.3937 7.39132 39.2321 7.42666 39.1603C7.462 39.0526 7.49734 38.9449 7.53268 38.8552C7.60335 38.7295 7.6917 38.586 7.81538 38.4424C7.67403 38.2629 7.60335 38.0295 7.60335 37.7424C7.60335 37.5449 7.60335 37.3654 7.63869 37.2578C7.63869 36.6116 7.93907 35.6962 8.57516 34.4937L9.19358 33.3629C9.70599 32.3937 10.0947 31.6757 10.3774 30.9578C10.6778 30.2398 10.9958 29.1629 11.3492 27.727C11.6319 26.4706 12.3034 25.2142 13.3635 23.9578L14.6887 22.3424C15.6075 21.2654 16.2082 20.368 16.544 19.6501C16.8797 18.9321 17.0564 18.0347 17.0564 17.3167C17.0564 16.9578 16.968 15.8808 16.7737 14.086C16.597 12.2911 16.5086 10.4962 16.5086 8.88083C16.5086 7.62442 16.6146 6.72699 16.8443 5.82955C17.074 4.93212 17.4804 4.03468 18.0812 3.31673C18.6112 2.59878 19.318 1.88083 20.3782 1.52186C21.4383 1.16289 22.6752 0.983398 24.0887 0.983398C24.6188 0.983398 25.1488 0.983398 25.6789 1.16289C26.209 1.16289 26.9158 1.34237 27.7992 1.70135C28.506 2.06032 29.2127 2.4193 29.7428 2.95776C30.4496 3.49622 30.9797 4.39365 31.5097 5.29109C31.8631 6.36801 32.2165 7.44494 32.3932 8.88083C32.5699 9.77827 32.5699 10.6757 32.7466 11.9321C32.7466 13.009 32.9233 13.727 32.9233 14.2654C33.1 14.8039 33.1 15.5219 33.2767 16.4193C33.4534 17.1372 33.63 17.8552 33.9834 18.3937C34.3368 19.1116 34.6902 19.8295 35.2203 20.5475C35.7503 21.4449 36.4571 22.3424 37.1639 23.4193C38.7541 25.2142 39.9909 27.1885 40.6977 29.1629C41.5812 30.9578 42.1112 33.2911 42.1112 35.786C42.1112 37.0244 41.9346 38.227 41.5812 39.3937C41.9346 39.3937 42.1112 39.5372 42.2879 39.7885C42.4646 40.0398 42.6413 40.5783 42.818 41.4219L42.9947 42.7501C43.1714 43.1449 43.3481 43.5219 43.8782 43.8449C44.2315 44.168 44.5849 44.4372 45.115 44.6526C45.4684 44.8321 45.9985 45.0834 46.3518 45.4065C46.7052 45.7654 46.8819 46.1424 46.8819 46.5372C46.8819 47.1475 46.7052 47.5962 46.3518 47.9193C45.9985 48.2783 45.6451 48.5295 45.115 48.6911C44.7616 48.8706 44.0549 49.2295 42.9947 49.7357C42.1112 50.267 41.2278 50.9113 40.3443 51.6742L38.5774 53.2016C37.8706 53.9016 37.1639 54.4042 36.6338 54.7093C36.1037 55.0324 35.397 55.1939 34.6902 55.1939L33.4534 55.0503C32.0398 54.6734 31.1564 53.9554 30.6263 52.8606C27.7992 52.5124 25.5022 52.3401 24.0887 52.3401'
            fill='currentColor'
          />
        </svg>
      ),
      btns: [
        <button disabled={isMobile} key={1} onClick={() => downloadLinux86Deb(true)} className={'download-btn'}>
          Download Linux (.deb)
        </button>,
        <button disabled={isMobile} key={2} onClick={() => downloadLinux86Rpm(true)} className={'download-btn'}>
          Download Linux (.rpm)
        </button>,
      ],
    },
  ];

  return (
    <div id={'across'} className={'across'}>
      <div className={'title across-title'}>
        Privacy-first,
        <br />
        every{' '}
        <span className={'primary-word'}>
          device
          <span className={'primary-line'}>
            <svg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%' viewBox='0 0 281 19' fill='none'>
              <path
                d='M278.409 13.9724C202.46 7.00179 149.379 -2.68492 24.6525 5.77747C22.2168 5.94272 22.1355 9.39782 24.5653 9.63366L104.853 17.4263C55.789 10.708 28.9571 10.7611 2.19828 14.4821'
                stroke='currentColor'
                strokeWidth='3'
                strokeLinecap='square'
              />
            </svg>
          </span>
        </span>
        <div className={'icon text-primary'}>
          <svg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%' viewBox='0 0 40 56' fill='none'>
            <path
              d='M30.3419 1C24.0887 24.9999 8.69623 21 1 21C13.9874 25.9999 16.828 37.4999 12.0632 55C14.4683 46.1667 25.1468 30.6001 39 33.0001C25.0507 26.9999 26.9748 16.5 30.3419 1Z'
              stroke='currentColor'
              strokeWidth='3'
            />
          </svg>
        </div>
      </div>
      <div className={'across-download'}>
        {downloadBtns.map((item, index) => (
          <div id={item.title} key={index} className={'across-download-item'}>
            <div className={'bg'} />
            <div className={'across-download-item-icon'}>{item.icon}</div>
            <div className={'dark:text-gray-400'}>Desktop</div>
            <div className={'across-download-item-title'}>{item.title}</div>
            <div className={'across-download-item-btns'}>{item.btns}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DownloadAcross;
