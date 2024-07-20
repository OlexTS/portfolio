import React from 'react';
import { MdOutlineEmail } from 'react-icons/md';
import { FaGithub } from 'react-icons/fa6';
import { FaLinkedin } from 'react-icons/fa';
import { FaTelegram } from 'react-icons/fa';
import { List, Link } from './Contacts.styled';

const Contacts = () => {
  return (
    <List>
      <li>
        <Link
          href="mailto:sashokseven@gmail.com"
          aria-label="email"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MdOutlineEmail size={40}  />
        </Link>
      </li>
      <li>
        <Link
          href="https://github.com/OlexTS"
          aria-label="github"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={40}  />
        </Link>
      </li>
      <li>
        <Link
          href="www.linkedin.com/in/olexandr-tsapuk"
          aria-label="LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={40}  />
        </Link>
      </li>
      <li>
        <Link
          href="https://t.me/OlexTs"
          aria-label="telegram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTelegram size={40}  />
        </Link>
      </li>
    </List>
  );
};

export default Contacts;
