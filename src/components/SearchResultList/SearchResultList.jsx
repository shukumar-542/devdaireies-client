import React from 'react';

const SearchResultList = ({result}) => {
    console.log(result);
    return (
        <div>
            {
                result.map((res,_id)=> {
                    return <div key={_id}>{res.subcategory}</div>
                })
            }
        </div>
    );
};

export default SearchResultList;