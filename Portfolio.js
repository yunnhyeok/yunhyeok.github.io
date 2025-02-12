function showCategory(categoryId) {
  // 모든 탭에서 active 클래스 제거
  const tabs = document.querySelectorAll(".skill-tab");
  tabs.forEach((tab) => {
    tab.classList.remove("active");
  });

  // 클릭한 탭에 active 클래스 추가
  const activeTab = document.querySelector(
    `[onclick="showCategory('${categoryId}')"]`
  );
  activeTab.classList.add("active");

  // 모든 카테고리 숨김 처리
  const categories = document.querySelectorAll(".skill-category");
  categories.forEach((category) => {
    category.classList.remove("active");
  });

  // 선택된 카테고리만 표시
  document.getElementById(categoryId).classList.add("active");
}

/*project card JS*/
document.addEventListener("DOMContentLoaded", () => {
  const projectTabs = document.querySelectorAll(".project-tab");
  const projects = document.querySelectorAll(".project-card");

  projectTabs.forEach((projectTab) => {
    projectTab.addEventListener("click", () => {
      projectTabs.forEach((t) => t.classList.remove("active"));
      projectTab.classList.add("active");

      const category = projectTab.getAttribute("data-category");

      projects.forEach((project) => {
        if (
          category === "all" ||
          project.getAttribute("data-category") === category
        ) {
          project.style.display = "block";
        } else {
          project.style.display = "none";
        }
      });
    });
  });
});

function openModal(modalId, imageSrc, title, description) {
  const modal = document.getElementById(modalId);
  if (!modal) {
    console.error(`모달 ID(${modalId})를 찾을 수 없습니다.`);
    return;
  }

  const modalImage = modal.querySelector(".modal-image");
  const modalTitle = modal.querySelector(".modal-header h2");
  const modalDescription = modal.querySelector(".modal-header p");

  modal.style.display = "flex"; // 모달 표시

  if (imageSrc) {
    modalImage.style.backgroundImage = `url(${imageSrc})`;
    modalImage.style.backgroundSize = "cover";
  }

  modalTitle.innerText = title || "프로젝트 제목 없음";
  modalDescription.innerText = description || "설명이 없습니다.";
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.style.display = "none"; // 해당 모달 숨김
  }
}

/* 작업기여도 박스 */
// 리스트 토글 (여러 개 추가 가능)
function toggleList(listId) {
  const list = document.getElementById(listId);
  list.style.display = list.style.display === "none" ? "block" : "none";
}

/* 프로젝트 이미지를 띄우는 JS 함수 */
// 팝업을 띄우는 함수
document.addEventListener("DOMContentLoaded", function () {
  function showPopup(imgElement) {
    // 현재 클릭된 이미지가 속한 모달 찾기
    const parentModal = imgElement.closest(".modal");

    if (!parentModal) {
      console.error("이미지가 속한 모달을 찾을 수 없습니다.");
      return;
    }

    // 해당 모달의 팝업 컨테이너 및 이미지 요소 찾기
    const popupContainer = parentModal.querySelector(".popup-container");
    const popupImage = parentModal.querySelector(".popup-image");

    if (!popupContainer || !popupImage) {
      console.error("팝업 요소를 찾을 수 없습니다.");
      return;
    }

    // 클릭한 이미지의 src 가져오기
    popupImage.src = imgElement.src;

    // 해당 모달 내에서 팝업 표시
    popupContainer.style.display = "flex";
  }

  function hidePopup(event) {
    // 이벤트가 발생한 요소가 포함된 모달 찾기
    const parentModal = event.target.closest(".modal");

    if (!parentModal) {
      console.error("팝업 컨테이너가 속한 모달을 찾을 수 없습니다.");
      return;
    }

    // 해당 모달 내의 팝업 컨테이너 찾기
    const popupContainer = parentModal.querySelector(".popup-container");

    if (!popupContainer) {
      console.error("팝업 컨테이너가 존재하지 않습니다.");
      return;
    }

    // 팝업 닫기 (컨테이너 클릭 또는 닫기 버튼 클릭 시)
    if (
      event.target.classList.contains("popup-container") ||
      event.target.classList.contains("popup-close")
    ) {
      popupContainer.style.display = "none";
    }
  }

  // 전역 범위에서 함수 사용 가능하도록 등록
  window.showPopup = showPopup;
  window.hidePopup = hidePopup;
});
