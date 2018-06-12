const UPLOAD_FILE = 'payload/upload_file';

export const uploadToServer = payload => {
  return {
    type: UPLOAD_FILE,
    payload
  }
}

export default (state = {}, action) => {
  switch (action.type) {
    default: return state;
  }
}
