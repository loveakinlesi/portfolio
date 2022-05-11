import moment from 'moment';
import { array } from 'js-randomize';

function formattedNumber(myNumber){ 
    return myNumber.toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false
  })}

function getArticleLink(slug, dateTime){
    return moment(dateTime).format(`[/blog/]YYYY/MM[/${slug}]`)
}

function getArticleDate(dateTime){
    return moment(dateTime).format('MMMM DD, YYYY')
}

function randomBgImage(){
    const images = [
        'https://images.unsplash.com/photo-1637825891028-564f672aa42c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80',
        'https://images.unsplash.com/photo-1652195057379-62ecfa7dc04d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3279&q=80',
        'https://images.unsplash.com/photo-1651072306635-89bb5b9303d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3264&q=80',
        'https://images.unsplash.com/photo-1627037558426-c2d07beda3af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2775&q=80',
        'https://images.unsplash.com/photo-1627843240043-aa499ed215e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2148&q=80'
    ]

    return array(images)[0]
}

export {getArticleLink, getArticleDate, randomBgImage}