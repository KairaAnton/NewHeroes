import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as heroesActionCreators from '../../actions/heroesActionCreators';
import ReactPaginate from 'react-paginate';
import CONSTANS from '../../CONSTANS';
import styles from './HeroesList.module.sass';
import HeroPage from '../HeroPage';

function HeroesListItem(props) {

  const {

    hero: { id, nickname, realName, originDescription, catchPhrase, superpowers, images }
  } = props;

  return (
    <li key={id}>
      nickname: {nickname}, images:{images}
      <button onSubmit={()=>{}}>просмотреть героя</button>
    </li>

  );
}



function HeroesList() {
  const [selected, setSelected] = useState(1)
  const [offset, setOffset] = useState(0);
  const { heroes, isFetching, error } = useSelector(state => state.heroes);
  const dispatch = useDispatch();
  const { getHeroes } = bindActionCreators(heroesActionCreators, dispatch);



  useEffect(() => {
    getHeroes();

  }, []);


  const handlePageClick = async (data) => {
    await setSelected(data.selected);
    setOffset(Math.ceil(data.selected * 5));

  };
  const currentPageData = heroes
    .slice(offset, offset + CONSTANS.RESULTS_PAGINATION_PAGE)
    .map((hero) => hero);

  return (
    <>
      <ul>
        {currentPageData.map(h => (
          <HeroesListItem hero={h} />
        ))}
        {isFetching && <li>Loading...</li>}
        {error && <li>ERROR</li>}
      </ul>




      <ReactPaginate
        pageRangeDisplayed={2}
        marginPagesDisplayed={5}
        breakLabel={'...'}
        pageCount={Math.ceil(heroes.length / CONSTANS.RESULTS_PAGINATION_PAGE)}
        onPageChange={handlePageClick}
        containerClassName={styles.pagination}
        activeClassName={styles.paginationActive} />


    </>
  );
}

export default HeroesList;
