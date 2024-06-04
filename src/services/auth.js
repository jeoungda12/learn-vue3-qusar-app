import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  updatePassword,
  sendEmailVerification,
} from 'firebase/auth';
import { uid } from 'quasar';
import { auth } from 'src/boot/firebase';

const DEFAULT_PHOTO_URL =
  'https://api.dicebear.com/8.x/adventurer-neutral/svg?seed=';

// 로그인 (구글)
export async function signInWithGoogle() {
  const provider = new GoogleAuthProvider();

  // result 로 signInwithPopup이 return 하는 <UserCredential> 값을 받는 방법.
  // 아래는 <UserCredential>중 {user} 값만 읽어오는 구조분해할당 방법.
  // const result = await signInWithPopup(auth, provider);
  const { user } = await signInWithPopup(auth, provider);
  return user;
}

export async function logout() {
  await signOut(auth);
}

export async function signUpWithEmail({ email, password, nickname }) {
  const { user } = await createUserWithEmailAndPassword(auth, email, password);
  await updateProfile(user, {
    displayName: '',
    photoURL: generateDefaultPhotoURL(user.id),
  });
  sendVerificationEmail();
}

export function generateDefaultPhotoURL(uid) {
  return `${DEFAULT_PHOTO_URL}${uid}`;
}

// 로그인
export async function signInWithEmail(email, password) {
  const { user } = await signInWithEmailAndPassword(auth, email, password);
  return user;
}

// 비밀번호 재설정
export async function sendPasswordReset(email) {
  await sendPasswordResetEmail(auth, email);
}

// 비밀번호 변경
export async function updateUserPassword(newPassword) {
  await updatePassword(auth.currentUser, newPassword);
}

export async function sendVerificationEmail() {
  await sendEmailVerification(auth.currentUser);
}
