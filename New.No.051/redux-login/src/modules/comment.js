const TYPE = {
  ADD: "comment/add",
  EDIT: "comment/edit",
  REMOVE: "comment/remove",
};

// 게시글에 직접 덧글을 추가할 수 있으나 비효율 적이다. => 덧글이 추가될 때마다 해당 게시글을 업데이트 해야하기 때문이다.
const add = (text, userId, boardId) => ({
  type: TYPE.ADD,
  payload: {
    text,
    userId,
    boardId,
  },
});

const edit = (id, text) => ({
  type: TYPE.EDIT,
  payload: {
    id,
    text,
  },
});

const remove = (id) => ({
  type: TYPE.REMOVE,
  payload: {
    id,
  },
});

export const action = { add, edit, remove };
export const initialize = [];

let id = 0;
export const reducer = (state = initialize, action) => {
  const { type, payload } = action;

  switch (type) {
    case TYPE.ADD:
      id++;
      return [{ id, ...payload, createdAt: Date.now() }, ...state];
    case TYPE.EDIT: {
      const tempState = [...state].map((item) => {
        if (item.id == payload.id) item.text = payload.text;
        return item;
      });
      return tempState;
    }
    case TYPE.REMOVE: {
      const tempState = [...state].filter((item) => item.id != payload.id);
      return tempState;
    }
    default:
      return state;
  }
};
