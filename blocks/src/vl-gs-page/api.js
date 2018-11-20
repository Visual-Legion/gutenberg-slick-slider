import axios from 'axios';

export const getCPTsWithArgs = (args) => {

	var {vl_gs_page_order, vl_gs_page_per_page} = args;

	var call = '/wp-json/slider/v1/examples';

	if (vl_gs_page_per_page) {
		call += `?vl_gs_page_per_page=${vl_gs_page_per_page}`
		if (vl_gs_page_order) {
			call += `&vl_gs_page_order=${vl_gs_page_order}`
		}
	} else {
		if (vl_gs_page_order) {
			call += `?vl_gs_page_order=${vl_gs_page_order}`
		}
	}

	console.log('call', call);

	return axios.get(call);
}

export const getLatestCPTs = () => {
	return axios.get('/wp-json/slider/v1/examples/latest');
}
