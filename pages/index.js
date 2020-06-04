import Head from 'next/head';
import { connect } from 'react-redux';
import { HOME_PAGE_TITLE } from '../redux/actions/homePageAction';
import { getuser } from '../api/user';

const Home = (props) => (
  <div className=''>
    <Head>
      <title>Create Next App</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>

    <main>
      <h1 className='bg-red-600 py-16 text-center text-5xl text-white'>
        {props.homePage.title}
      </h1>
      {/* {process.env.NEXT_PUBLIC_ANALYTICS_ID} */}
      <div className='text-center'>
        <button className='bg-blue-500 p-4 my-12 rounded text-white' onClick={() => props.changeTitle({ newTitle: 'Hello Happiness' })}>Change Title</button>
      </div>
    </main>
  </div>
);

Home.getInitialProps = async () => {
  return {
    data: await getuser()
  };
};

const mapStateToProps = (state) => {
  return {
    homePage: state.homePage
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeTitle: (data) => dispatch({ type: HOME_PAGE_TITLE, payload: data })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
