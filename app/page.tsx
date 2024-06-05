"use client";
import { GeistMono } from 'geist/font/mono';
import { useNetworkSpeedTest } from '@rtbjs/network-speed-test';
import { useEffect, useState } from 'react';

type UseNetworkSpeedTest = {
  runTest: (options?: RunTestOptions) => void;
  download: {
    isRunning: boolean;
    isComplete: boolean;
    result: {
      error?: any;
      elapsedTime?: number;
      meanClientMbps?: number;
      numberOfBytes?: number;
    };
  };
  upload: {
    isRunning: boolean;
    isComplete: boolean;
    result: {
      error?: any;
      elapsedTime?: number;
      meanClientMbps?: number;
      numberOfBytes?: number;
    };
  };
  isRunning: boolean;
  isComplete: boolean;
};

type RunTestOptions = {
  download?: boolean;
  upload?: boolean;
  runUploadBeforeDownload?: boolean;
};

export default function Home() {
  const { runTest, download, upload } = useNetworkSpeedTest();
  const [isTesting, setIsTesting] = useState({ upload: false, download: false });
 const [results, setResults] = useState({ download: 0, upload: 0 });
 
  const handleRunDownloadTest = () => {
    setIsTesting(prevState => ({ ...prevState, download: true }));
    runTest({ download: true, upload: false });
  };

  const handleRunUploadTest = () => {
    setIsTesting(prevState => ({ ...prevState, upload: true }));
    runTest({ upload: true, download: false });
  };

   const handleReset = () => {
    setResults({ download: 0, upload: 0 });
  };

  useEffect(() => {
    if (upload.isComplete) {
      console.log("Upload test completed:", upload.result);
      setIsTesting(prevState => ({ ...prevState, upload: false }));
    }
  }, [upload.isComplete, upload.result]);

  useEffect(() => {
    if (download.isComplete) {
      console.log("Download test completed:", download.result);
      setIsTesting(prevState => ({ ...prevState, download: false }));
    }
  }, [download.isComplete, download.result]);

  return (
    <>
      <div className='mx-auto text-center my-48'>
        <h1 className='text-3xl mb-3 font-bold'>
          Basement Network <span className='animate-pulse'>🛜</span>
      </h1>
      <section>
        <div>
          Download Speed: {download.result.meanClientMbps !== undefined ? download.result.meanClientMbps.toFixed(2) : 0} Mbps
        </div>
        <div>
          Upload Speed: {upload.result.meanClientMbps !== undefined ? upload.result.meanClientMbps.toFixed(2) : 0} Mbps
        </div>
      </section>
       <section className='space-x-3 mt-3'>
        <button className='bg-sky-500 px-2 py-1 rounded-lg' onClick={handleRunDownloadTest} disabled={isTesting.download || isTesting.upload}>
          {isTesting.download ? 'Running Download Test...' : 'Run Download Test'}
        </button>
        <button className='bg-sky-500 px-2 py-1 rounded-lg' onClick={handleRunUploadTest} disabled={isTesting.download || isTesting.upload}>
          {isTesting.upload ? 'Running Upload Test...' : 'Run Upload Test'}
        </button>
        <button className='bg-rose-500 px-2 py-1 rounded-lg'>
          Reset
        </button>
      </section>
      </div>
    </>
  );
}
