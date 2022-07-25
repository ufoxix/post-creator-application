import React from 'react';
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            <MyInput
                placeholder={'Search...'}
                value={filter.query}
                onChange={e => setFilter({...filter, query: e.target.value})}
            />
            <MySelect
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                defaultValue='Sorted by'
                options={[
                    {value: 'title', name: 'By Title'},
                    {value: 'description', name: 'By Description'}
                ]}
            />
        </div>
    );
};

export default PostFilter;
