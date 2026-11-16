// ben fero ban
const targetUrls = new Set([
  "https://www.youtube.com/watch?v=fdg2OG8zFiM",
  "https://www.youtube.com/watch?v=GgNSg6qIyvE",
  "https://www.youtube.com/watch?v=WTx6wElGHe4",
  "https://www.youtube.com/watch?v=s0EYOiNJUbI",
  "https://www.youtube.com/watch?v=dKpFwjSGkDA",
  "https://www.youtube.com/watch?v=8xk4UarkXcU",
  "https://www.youtube.com/watch?v=7hJgEqPPS4k",
  "https://www.youtube.com/watch?v=9FIwhBAsUnY",
  "https://www.youtube.com/watch?v=h_35H55QkhU",
  "https://www.youtube.com/watch?v=haf2vtyFsJU",
  "https://www.youtube.com/watch?v=X55jQYKyDFE",
  "https://www.youtube.com/watch?v=JfHKiaJJomw",
  "https://www.youtube.com/watch?v=tkn92OmwFh8",
  "https://www.youtube.com/watch?v=K7kkDSkfbI4",
  "https://www.youtube.com/watch?v=hneQEAi2va8",
  "https://www.youtube.com/watch?v=Z_YqzGB54Fc",
  "https://www.youtube.com/watch?v=DfKABxr04j4",
  "https://www.youtube.com/watch?v=CyCFjB-J8Xs",
  "https://www.youtube.com/watch?v=wDW3FsupapY",
  "https://www.youtube.com/watch?v=RiZbKOWuPN0",
  "https://www.youtube.com/watch?v=K24zayBew-8",
  "https://www.youtube.com/watch?v=QlE3rYracIU",
  "https://www.youtube.com/watch?v=zCzy0uwJk8M",
  "https://www.youtube.com/watch?v=MKPEZlXY49Q",
  "https://www.youtube.com/watch?v=215nbiVgfpQ",
  "https://www.youtube.com/watch?v=U71cDBg26y8",
  "https://www.youtube.com/watch?v=9ovSZkGp-JE",
  "https://www.youtube.com/watch?v=7DFgikPbMsY",
  "https://www.youtube.com/watch?v=69_mZNySMdU",
  "https://www.youtube.com/watch?v=cc-enj1Iy0c",
  "https://www.youtube.com/watch?v=ckcNcEsFP-E",
  "https://www.youtube.com/watch?v=u6eMZ9m7p4I",
  "https://www.youtube.com/watch?v=tbJ4MoJuUnM",
  "https://www.youtube.com/watch?v=sPIyILZzh9o",
  "https://www.youtube.com/watch?v=p_p2Smbsr-Q",
  "https://www.youtube.com/watch?v=5ZHid3Ret8o",
  "https://www.youtube.com/watch?v=LkeeOHNHghE",
  "https://www.youtube.com/watch?v=aqQ7g_11oeA",
  "https://www.youtube.com/watch?v=hNr5FtXI6tM",
  "https://www.youtube.com/watch?v=YSNptpukKA8",
  "https://www.youtube.com/watch?v=qUmQ-jokvBg",
  "https://www.youtube.com/watch?v=kCLWaV8h2Dk",
  "https://www.youtube.com/watch?v=6IzYesDD_yY",
  "https://www.youtube.com/watch?v=iRXKMceoTZc",
  "https://www.youtube.com/watch?v=v8HOE8Eh9zI",
  "https://www.youtube.com/watch?v=7PGJ1Q_5rsc",
  "https://www.youtube.com/watch?v=z3wAjJXbYzA",
  "https://www.youtube.com/watch?v=9JHtrs7WeEI",
  "https://www.youtube.com/watch?v=0-PBqTnCbJc",
  "https://www.youtube.com/watch?v=yocbCRR4zJI",
  "https://www.youtube.com/watch?v=Z_YqzGB54Fc",
])

const redirectUrl = "https://www.youtube.com/watch?v=d-ggzGbsEWE&t=29s";

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  console.log("tabId", "changeInfo", "tab")
  if (changeInfo.url) {
    if (targetUrls.has(changeInfo.url)) {
      chrome.tabs.update(tabId, { url: redirectUrl })
      console.log(`Yönlendirilen sekme: ${redirectUrl}`)
    }
  }
})
