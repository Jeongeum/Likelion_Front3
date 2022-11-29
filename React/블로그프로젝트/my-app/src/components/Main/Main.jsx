import { useState, useEffect, useContext } from 'react';
import axios from 'axios'
import UserContext from '../../context/UserContext';
import Posts from './posts/Posts';
import About from './about/About';
import './main.css'

function Main() {
    const { isLogin } = useContext(UserContext);
    const [posts, setPosts] = useState()

    useEffect(() => {
        // axios 사용해서 데이터 받아오기
        // useEffect로 감싸있지 않았다면, 처음에 통신을 통해 setPosts를 셋팅함. -> 값이 변경되었으니 다시 재렌더링 -> 또 axios 통신을 통해 setPosts 셋팅 -> 다시 재렌더링
        // https://paullabworkspace.notion.site/14-Hook-useEffect-386ecd57301845ebb402c40cc01bf330
        // 암기 : 무한반복된다? useEffect , 깜빡임이 일어난다? useLayoutEffect
        // 계속 받아오면 안되니까 useEffect 사용하고 뒤에 [] 붙여서 한번만 렌더링 되게 하기
    axios
        .get('https://raw.githubusercontent.com/weniv/react-blog/react/public/posts.json')
        .then(json => {
            // console.log(json)
            // console.log(json.data)
            setPosts(json.data)
        })
    }, [])
    
    return (
            <main>
                {posts === undefined ? <></> : (
                    <div className="max-width">
				<h2 className="a11y-hidden">Post</h2>
				<ul className="posts">
                    {/* components array로 생성 */}
					<Posts posts={posts}/>
				</ul>
				{isLogin ? <About/> : <></>}
			</div>
                )}
			
		</main>
    );
}

export default Main;