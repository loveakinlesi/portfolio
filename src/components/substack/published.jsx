import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

export const PublishedComponent = () => {

    const [posts, setPosts] = useState([]);
    const substackSid = 'substack.sid=s%3A1pj9LvwWIBSG-ZnfcUxcLbW-RACuGH3G.UaMNR%2F4uVmV7gcJlSD9747%2FLhgoGVqcBRa%2BUkA1xwCU';
    const ajs_anonymous_id = 'ajs_anonymous_id=%22b1a89270095ea1dd4674b4a0f19d490c%22';
    const substackLli = 1;
    const _gid = '_gid=GA1.2.1709182552.1652111685';
    const ab_testing_id = 'ab_testing_id=%2231beda8e-bbf3-4e6c-8c89-c7cde9513ab2%22';
    const visit_id = 'visit_id=%7B%22id%22%3A%222f796333-17d5-4611-ae11-abc4f5cb03dc%22%2C%22timestamp%22%3A%222022-05-09T21%3A04%3A43.289Z%22%2C%22utm_source%22%3A%22%2Fdiscover%2Fcategory%2Ftechnology%2Fpaid%22%7D;'



    // let myHeaders = new Headers();
    // // myHeaders.append("cookie", [substackSid, ab_testing_id, substackLli, visit_id].join(';'));
    // myHeaders.append('referer', 'https://loveakinlesi.substack.com/publish');
    // myHeaders.delete('origin')
    // myHeaders.append("cookie", "substack.sid=s%3A1pj9LvwWIBSG-ZnfcUxcLbW-RACuGH3G.UaMNR%2F4uVmV7gcJlSD9747%2FLhgoGVqcBRa%2BUkA1xwCU; ajs_anonymous_id=%22b1a89270095ea1dd4674b4a0f19d490c%22; substack.lli=1; _gid=GA1.2.1709182552.1652111685; ab_testing_id=%2231beda8e-bbf3-4e6c-8c89-c7cde9513ab2%22; _ga=GA1.1.199947151.1651608840; visit_id=%7B%22id%22%3A%222f796333-17d5-4611-ae11-abc4f5cb03dc%22%2C%22timestamp%22%3A%222022-05-09T21%3A04%3A43.289Z%22%2C%22utm_source%22%3A%22%2Fdiscover%2Fcategory%2Ftechnology%2Fpaid%22%7D; _ga_TLW0DF6G5V=GS1.1.1652130277.11.1.1652130499.0; __cf_bm=XNWdvGOfWl8GkLjKoi_mYAmxziUeNxPb45aTEvWPeOE-1652131513-0-AVVcI4OsRZyS/KZBzaGb9hl+DHsVUH8Furx527FwLEghk8tFXgdSyKRV583kjqB5aYX+qf8U5QfWYbgNIXIYtvk=; __cf_bm=SW.84dbl7quYEsu_Ovv4TrFuz8iUOpLVQEaiIMuvg3Q-1652131793-0-AbbfzoG5s/knjo0BSj6lqTV1iGI9FftKOHhSCE9amdKpz1fch9uaAMuPobFl23qUYFzxu1pcS7L1N6mDZ+QsNW0=; ab_testing_id=%2231beda8e-bbf3-4e6c-8c89-c7cde9513ab2%22; ajs_anonymous_id=%22b1a89270095ea1dd4674b4a0f19d490c%22; substack.sid=s%3A1pj9LvwWIBSG-ZnfcUxcLbW-RACuGH3G.UaMNR%2F4uVmV7gcJlSD9747%2FLhgoGVqcBRa%2BUkA1xwCU; visit_id=%7B%22id%22%3A%222f796333-17d5-4611-ae11-abc4f5cb03dc%22%2C%22timestamp%22%3A%222022-05-09T21%3A04%3A43.289Z%22%2C%22utm_source%22%3A%22%2Fdiscover%2Fcategory%2Ftechnology%2Fpaid%22%7D");
    // let requestOptions = {
    //     method: 'GET',
    //     headers: myHeaders,
    //     redirect: 'follow'
    // };
    // console.log(myHeaders.values(), requestOptions)




  useEffect(() => {
    fetch("https://loveakinlesi.substack.com/api/v1/drafts?filter=published")
      .then(response => response.text()) // parse JSON from request
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }, [])


  return (
    <div>PublishedComponent</div>
  )
}
