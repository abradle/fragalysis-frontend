/**
 * Created by abradley on 15/03/2018.
 */

import {SET_TO_BUY_LIST, APPEND_TO_BUY_LIST, REMOVE_FROM_TO_BUY_LIST, GET_FULL_GRAPH, GOT_FULL_GRAPH, SELECT_VECTOR} from './actonTypes'

export const setToBuyList = function (to_buy_list){
    console.log("ACTIONS: "+ to_buy_list)
    return {
        type: SET_TO_BUY_LIST,
        to_buy_list: to_buy_list
    }
}

export const appendToBuyList = function (item){
    console.log("ACTIONS: "+ item)
    return {
        type: APPEND_TO_BUY_LIST,
        item: item
    }
}

export const removeFromToBuyList = function (item){
    console.log("ACTIONS: "+ item)
    return {
        type: REMOVE_FROM_TO_BUY_LIST,
        item: item
    }
}

export const getFullGraph = function (item) {
    console.log("ACTIONS: " + item)
    return {
        type: GET_FULL_GRAPH,
        item: item
    }
}



export const gotFullGraph = function (result){
    console.log("ACTIONS: "+ result)
    return {
        type: GOT_FULL_GRAPH,
        input_mol_dict: result
    }
}


export const selectVector = function (vector){
    console.log("ACTIONS: "+ vector)
    return {
        type: SELECT_VECTOR,
        vector: vector
    }
}