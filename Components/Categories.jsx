import Link from "next/link";
import React, {useEffect, useState} from 'react';
import {getCategories} from "../services";

const Categories = () => {
	const [categories,setCategories] = useState([])

	useEffect(() => {
		getCategories()
			.then(res => setCategories(res))
	},[])

	return (
		<div className="bg-white shadow-lg p-8 mb-8 rounded-lg">
			<h3 className="text-xl mb-8 font-semibold border-b pb-4">
				Categories
			</h3>
			{categories.map(category => (
				<Link key={category.slug} href={`/category/${category.slug}`}>
					<span className="transition duration-200 cursor-pointer block pb-3 mb-3 text-indigo-800 hover:text-indigo-400">
						{category.name}
					</span>
				</Link>
			))}
		</div>
	);
};

export default Categories;
















